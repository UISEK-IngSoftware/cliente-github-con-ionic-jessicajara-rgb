import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import './Tab2.css';
import React from 'react';
import { IonInput } from '@ionic/react';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario de Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="form-container">
          <IonInput
            label="Nombre del Repositorio"
            labelPlacement="floating"
            fill="outline"
            placeholder="repositorio-de-ejemplo"
            className="form-field"
          ></IonInput>

          <IonTextarea
            label="Descripcion del repositorio"
            labelPlacement="floating"
            fill="outline"
            placeholder="este es un repositorio de ejemplo para demostrar el formulario"
            className="form-field"
            rows={6}></IonTextarea>

          <IonButton expand="block" className="form-field">Guardar</IonButton>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
