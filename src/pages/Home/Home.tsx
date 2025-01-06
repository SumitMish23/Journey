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
  IonText,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFolder, removeFolder } from "../../redux/features/ProjectSlice";
import { RootState } from "../../redux/store";
import { chevronForwardOutline, folderOpenOutline } from "ionicons/icons";
import Calendar from "../../assets/calendar.png";
import "./Home.scss";

interface Project {
  name: string;
  id: string;
}

const Home: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects);
  const dispatch = useDispatch();

  return (
    <IonPage className="home">
      <IonContent className="ion-padding">
        <IonRow class="ion-align-items-center">
          <IonTitle class="home-title" size="large">
            folders
          </IonTitle>
          <IonImg
            src={Calendar}
            class="calendar-btn"
            alt="schedule event"
          ></IonImg>
        </IonRow>

        {/*  Show all projects available */}
        {projects.length &&
          projects.map(function (item) {
            return (
              <IonCard
                routerLink="/folders/1"
                routerDirection="root"
                key={item.id}
              >
                <IonCardHeader>
                  <IonRow class="ion-justify-content-between">
                    <IonCardTitle>{item.name}</IonCardTitle>
                    <IonCardSubtitle>
                      <IonIcon
                        className="arrow-right"
                        icon={chevronForwardOutline}
                      />
                    </IonCardSubtitle>
                  </IonRow>
                </IonCardHeader>

                <IonCardContent>
                  {Math.floor(Math.random() * 100)}
                </IonCardContent>
              </IonCard>
            );
          })}

        {/* No Projects  */}
        {!projects.length && (
          <>
            <IonText class="no-projects">
              No folders available !!
              <IonIcon className="empty-folder" icon={folderOpenOutline} />
            </IonText>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
