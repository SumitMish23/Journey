import {
  IonContent,
  IonPage,
  IonTitle,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonRow,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import Calendar from "../../assets/calendar.png";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <IonPage className="home">
      <IonContent className="ion-padding">
        <IonRow class="ion-align-items-center">
          <IonTitle size="large">folders</IonTitle>
          <IonImg
            src={Calendar}
            class="calendar-btn"
            alt="schedule event"
          ></IonImg>
        </IonRow>

        {new Array(25).fill(0).map(function () {
          return (
            <IonCard>
              <IonCardHeader>
                <IonRow class="ion-justify-content-between">
                  <IonCardTitle>Card Title</IonCardTitle>
                  <IonCardSubtitle>
                    <IonIcon
                      className="arrow-right"
                      icon={chevronForwardOutline}
                    />
                  </IonCardSubtitle>
                </IonRow>
              </IonCardHeader>

              <IonCardContent>{Math.floor(Math.random() * 100)}</IonCardContent>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Home;
