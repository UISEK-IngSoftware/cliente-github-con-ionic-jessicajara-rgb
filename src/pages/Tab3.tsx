import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Tab3.css';
import { useState } from 'react';
import { getUserInfo } from '../services/GithubServices';

const Tab3: React.FC = () => {

  const [userInfo, setUserInfo] = useState({
    name: 'No se puede cargar el usuario',
    username: 'no-username',
    bio: 'No se puede cargar la biografía',
    avatar_url: 'https://ionicframework.com/docs/img/demos/card-media.png',
  });

  const loadUserInfo = async () => {
    const response = await getUserInfo();
    if (response) {
      setUserInfo({
        name: response.name,
        username: response.login,
        bio: response.bio,
        avatar_url: response.avatar_url,
      });
    }
  }

  useIonViewDidEnter(() => {
    console.log("******** Cargando informacion de usuario ********");
    loadUserInfo();
  });

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
