import React from "react";
import Title from "../title/Title";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import styles from "./Location.module.css";

const Location = () => {
  return (
    <section className={styles.container}>
      <Title h2="Location" />
      <div className={styles.mapContainer}>
        <YMaps>
          <Map
            // onLoad={() => setIsLoadingMap(true)}
            className={styles.map}
            defaultState={{
              center: [42.82368, 74.618101],
              zoom: 17,
            }}
            style={{ border: "1px solid silver" }}
          >
            <Placemark
              geometry={[42.82368, 74.618101]}
              properties={{
                iconContent: "Kaynar Banquet Hall",
              }}
              options={{
                preset: "islands#blackStretchyIcon",
                // draggable: false,
              }}
            />
          </Map>
        </YMaps>
      </div>
    </section>
  );
};

export default Location;
