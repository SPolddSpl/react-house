import React, { useEffect, useState } from "react";
import { Col, FlexboxGrid, Grid, List, Row } from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
import House from "../../interfaces/house";
import HouseService from "../../services/house-service";
import HouseCard from "./HouseCard";

import "./index.css";

function Main() {
  const houseService = new HouseService();
  const [houseList, setHouseList] = useState<House[]>([]);
  
  useEffect(() => {
    houseService.getHouses().then((data: House[]) => {
      data = data.sort();
      setHouseList(data);
    });
  }, []);

  return (
    <div className="grid-list">
      {houseList.map((item)=> {
        return <HouseCard key={item.id} {...item} />
      })}
    </div>
  );
}

export default Main;
