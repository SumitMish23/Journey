import {
  IonFabList,
  IonButton,
  IonPopover,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import React, { useState } from "react";
import Popup from "../Popup/Popup";
import { colorPalette, document, globe, addOutline } from "ionicons/icons";
import "./AddJournal.scss";

const AddJournal = () => {
  const [popoverData, setPopoverData] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const handleMouseEnter = (event: React.MouseEvent, data: string) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setPopoverData(data);
    setPopupPosition({ top: rect.top + 5, left: rect.left - 109 });
  };
  console.log(popupPosition);
  const handleMouseLeave = () => {
    setPopoverData(null);
    setPopupPosition(null);
  };

  return (
    <div className="fab-button">
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton className="fab-button-main">
          <IonIcon className="add-btn" icon={addOutline}></IonIcon>
        </IonFabButton>
        <IonFabList class="fab-button-list" side="top">
          <IonFabButton
            onMouseEnter={(e) => handleMouseEnter(e, "create new folder")}
            onMouseLeave={() => handleMouseLeave()}
            routerLink="/folders"
          >
            <IonIcon icon={document}></IonIcon>
          </IonFabButton>
          <IonFabButton
            onMouseEnter={(e) => handleMouseEnter(e, "Do something : 2")}
            onMouseLeave={() => handleMouseLeave()}
            routerLink="/tab2"
          >
            <IonIcon icon={colorPalette}></IonIcon>
          </IonFabButton>
          <IonFabButton
            routerLink="/tab3"
            onMouseEnter={(e) => handleMouseEnter(e, "Do something : 3")}
            onMouseLeave={() => handleMouseLeave()}
          >
            <IonIcon icon={globe}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>

      {/* Popup Data When Fab Button is Hovered ! */}
      {popoverData && popupPosition && (
        <Popup data={popoverData} position={popupPosition} />
      )}
    </div>
  );
};

export default AddJournal;
