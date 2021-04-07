import React, { useEffect, useState } from "react";
import { YMaps, Placemark, Map } from "react-yandex-maps";
import { PlacemarkProps } from "../../interfaces/placemark";
import HouseService from "../../services/house-service";
import MapService from "../../services/map-service";
import PlacemarkComp from "./PlacemarkComp";
import "./index.css";


function MapComp(props: any) {
  const mapState = { center: props.center ? props.center : [42.87550064374248, 74.61705246674954], zoom: 15 };
  const mapService = new MapService();
  const houseService = new HouseService();
  const [mapEvents, setMapEvents] = useState(props.mapEvents);
  const [placemark, setPlacemark] = useState<PlacemarkProps[]>([]);
  const [singlePlaceMark, setSinglePlacemark] = useState<PlacemarkProps>();

  useEffect(() => { }, [placemark]);

  useEffect(() => {
    if (props.house) {
      setSinglePlacemark(props.house);
    } else {
      houseService.getHouses().then((data) => {
        let tempArr: PlacemarkProps[] = [];
        data.map((item) => {
          tempArr.push({
            coordinates: [Number(item.ltd), Number(item.lng)],
            content: item.description,
            header: item.title,
            footer: `Price: $${item.price}`,
          });
        });
        setPlacemark(tempArr);
      });
    }
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
        {singlePlaceMark ? <PlacemarkComp {...singlePlaceMark} /> : ""}
      </Map>
    </YMaps>
  );
}

export default MapComp;
