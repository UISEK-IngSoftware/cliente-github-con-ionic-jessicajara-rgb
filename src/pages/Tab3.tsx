import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <img
            alt="Jessica Jara"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4n8v5LKnmR0EOKm9sdQ8Fkml_0S_XEC2BQ&s"
          />
          <IonCardHeader>
            <IonCardTitle>Jessica Jara</IonCardTitle>
            <IonCardSubtitle>jessicajaraa</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Soy estudiante de ingeniera de sotware. Estoy aqui para aprender.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
