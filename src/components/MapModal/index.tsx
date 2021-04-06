import React, { useEffect, useState } from "react";
import MapService from "../../services/map-service";

function MapModal(props: any) {
  const [img, setImg] = useState<string>();


  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
        display: 'flex',
        justifyContent: 'center'
      }}>
      <img src={img} alt="" />
    </div>
  );
}

export default MapModal;
