import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonAvatar,
  IonItem,
  IonLabel,
} from "@ionic/react";

export function Tab3() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Autores</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Equipe de Desenvolvimento</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"

                  alt="Lucas"
                />
              </IonAvatar>
              <IonLabel>
                <h2>Lucas Theodoro</h2>
                <p>RA: 194223</p>
              </IonLabel>
            </IonItem>

            <IonItem lines="none">
              <IonAvatar slot="start">
                <img
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  alt="Gabriel Izidre"
                />
              </IonAvatar>
              <IonLabel>
                <h2>Gabriel Izidre</h2>
                <p>RA: 194629</p>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}