import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

interface PhotoGalleryContextType {
  photos: UserPhoto[];
  takePhoto: () => Promise<void>;
  clearAllPhotos: () => Promise<void>;
}

const PhotoGalleryContext = createContext<PhotoGalleryContextType | undefined>(undefined);

const PHOTO_STORAGE = 'photos';

export function PhotoGalleryProvider({ children }: { children: ReactNode }) {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  useEffect(() => {
    const loadSaved = async () => {
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];
      
      // Filtrar apenas fotos com URLs base64 válidas (data:image/...)
      const validPhotos = photosInPreferences.filter(photo => {
        const isValidBase64 = photo.webviewPath?.startsWith('data:image/');
        return isValidBase64;
      });
      
      
      // Se removemos fotos inválidas, atualizar o storage
      if (validPhotos.length !== photosInPreferences.length) {
        await Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(validPhotos) });
      }
      
      setPhotos(validPhotos);
    };
    loadSaved();
  }, []);

  const takePhoto = async () => {
    console.log('📸 Context: Iniciando takePhoto...');
    
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    
    console.log('📷 Context: Foto capturada:', photo);
    
    const fileName = Date.now() + '.jpeg';
    
    let base64Data = '';
    if (photo.webPath) {
      try {
        const response = await fetch(photo.webPath);
        const blob = await response.blob();
        base64Data = await convertBlobToBase64(blob);
      } catch (error) {
        console.error('❌ Context: Erro ao converter para base64:', error);
        base64Data = photo.webPath;
      }
    }
    
    const newPhoto: UserPhoto = {
      filepath: fileName,
      webviewPath: base64Data,
    };
    
    
    const newPhotos = [newPhoto, ...photos];
    
    setPhotos(newPhotos);
    
    // Salvando no preferences
    await Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };

  const clearAllPhotos = async () => {
    setPhotos([]);
    await Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify([]) });
  };

  return (
    <PhotoGalleryContext.Provider value={{ photos, takePhoto, clearAllPhotos }}>
      {children}
    </PhotoGalleryContext.Provider>
  );
}

export { PhotoGalleryContext };

// Função auxiliar para converter blob para base64
function convertBlobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
}