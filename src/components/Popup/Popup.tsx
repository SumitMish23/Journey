import React from "react";
import "./Popup.scss";
import { IonText } from "@ionic/react";

type PopupProps = {
  data: string;
  position: Partial<{
    top: number;
    left: number;
    right: number;
    bottom: number;
  }>;
};

const Popup: React.FC<PopupProps> = ({ data, position }) => {
  if (data) {
    return (
      <div className="popup">
        <IonText
          class="popup-text"
          style={{ position: "absolute", ...position }}
        >
          {data}
        </IonText>
      </div>
    );
  } else {
    return "No data available.";
  }
};

export default Popup;
