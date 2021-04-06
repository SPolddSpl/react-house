import React, { useEffect, useState } from "react";
import { YMaps, Placemark, Map } from "react-yandex-maps";
import { PlacemarkProps } from "../../interfaces/placemark";
import HouseService from "../../services/house-service";
import MapService from "../../services/map-service";
import PlacemarkComp from "./PlacemarkComp";
import "./index.css";

const mapState = { center: [56.848217, 53.236675], zoom: 9 };

function MapComp(props: any) {
  const mapService = new MapService();
  const houseService = new HouseService();
  const [mapEvents, setMapEvents] = useState(props.mapEvents);
  const [placemark, setPlacemark] = useState<PlacemarkProps[]>([]);
  useEffect(() => {}, [placemark]);

  useEffect(() => {
    houseService.getHouses().then((data) => {
      let tempArr: PlacemarkProps[] = [];
      data.map((item) => {
        tempArr.push({
          coordinates: [Number(item.lng), Number(item.ltd)],
          content: item.description,
          header: item.title,
          footer: `Price: $${item.price}`,
        });
      });
      setPlacemark(tempArr);
    });
  }, []);

  return (
    <YMaps>
      <Map
        style={{ width: props.width }}
        className={"map"}
        state={{
          center: mapState.center,
          zoom: mapState.zoom,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        onClick={(e: any) => {
          if (mapEvents) {
            setPlacemark(e.get("coords"));
            props.coords(e.get("coords"));
          }
        }}>
        {placemark.length
          ? placemark.map((item, i) => {
              return <PlacemarkComp key={i} {...item} />;
            })
          : ""}
        {placemark.length ? <PlacemarkComp {...placemark[0]} /> : ""}
      </Map>
    </YMaps>
  );
}

export default MapComp;
