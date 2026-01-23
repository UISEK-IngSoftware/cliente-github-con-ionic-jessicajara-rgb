import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RepoItem from '../components/RepoItem';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <RepoItem name="android-repo" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1eK7_IbFs4d5WbAYMoMITH3A2wy_9XgLAw&s" />
          <RepoItem name="ios-repo" imageUrl="https://www.freeiconspng.com/thumbs/ios-png/os7-style-metro-ui-icon-19.png" />
          <RepoItem name="ionic-repo" imageUrl="https://www.pikpng.com/pngl/m/381-3810329_ionic-framework-icon-clipart.png" />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
