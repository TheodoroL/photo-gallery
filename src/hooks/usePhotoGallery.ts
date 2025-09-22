import { useContext } from 'react';
import { PhotoGalleryContext } from '../contexts/PhotoGalleryContext';

export function usePhotoGallery() {
  const context = useContext(PhotoGalleryContext);
  if (context === undefined) {
    throw new Error('usePhotoGallery deve ser usado dentro de um PhotoGalleryProvider');
  }
  return context;
}

