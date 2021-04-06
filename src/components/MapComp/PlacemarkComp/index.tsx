import { Placemark } from "react-yandex-maps";
import { PlacemarkProps } from "../../../interfaces/placemark";

function PlacemarkComp({ footer,header, content, coordinates }: PlacemarkProps) {
  return (
    <Placemark
      geometry={coordinates}
      properties={{
        balloonContentBody: content,
        balloonContentHeader: header,
        balloonContentFooter: footer
      }}
      modules={["geoObject.addon.balloon"]}
    />
  );
}

export default PlacemarkComp;
