import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

import './Tab1.css';

export function Tab1(){
  const { takePhoto } = usePhotoGallery();
  return (
  <IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Câmera</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent fullscreen>
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">Câmera</IonTitle>
      </IonToolbar>
    </IonHeader>
     <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
  </IonContent>
  </IonPage>
  );

}
