import { IonFabList, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { colorPalette, document, globe, addOutline } from "ionicons/icons";

import "./AddJournal.scss";
const AddJournal = () => {
  return (
    <div className="fab-button">
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton className="fab-button-main">
          <IonIcon className="add-btn" icon={addOutline}></IonIcon>
        </IonFabButton>
        <IonFabList class="fab-button-list" side="top">
          <IonFabButton>
            <IonIcon icon={document}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={colorPalette}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={globe}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </div>
  );
};

export default AddJournal;
