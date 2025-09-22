import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
} from '@ionic/react';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

export function Tab2() {
  const { photos, clearAllPhotos } = usePhotoGallery();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galeria</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2 style={{ padding: '20px', textAlign: 'center' }}>
          Fotos na galeria: {photos.length}
        </h2>
        
        {/* Botão de debug para limpar storage */}
        <div style={{ padding: '10px', textAlign: 'center' }}>
          <IonButton 
            color="danger" 
            size="small" 
            onClick={() => clearAllPhotos()}
          >
            🗑️ Limpar Todas as Fotos (Debug)
          </IonButton>
        </div>
        
        {photos.length === 0 ? (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <p>Nenhuma foto encontrada. Vá para Câmera e tire uma foto!</p>
          </div>
        ) : (
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => {
                return (
                  <IonCol size="6" key={photo.filepath}>
                    <IonImg 
                      src={photo.webviewPath} 
                      alt={`Foto ${index + 1}`}
                      style={{ border: '2px solid #ccc', borderRadius: '8px' }}
                    />
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
}
