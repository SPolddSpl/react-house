import React, { useEffect, useState } from "react";
import { Col, FlexboxGrid, Grid, List, Row } from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
import House from "../../interfaces/house";
import HouseService from "../../services/house-service";
import HouseCard from "./HouseCard";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  GridList,
  GridListTile,
  CardActionArea,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import "./index.css";

function Main() {
  const houseService = new HouseService();
  const [houseList, setHouseList] = useState<House[]>([]);

  useEffect(() => {
    houseService.getHouses().then((data: House[]) => {
      setHouseList(data);
    });
  }, []);

  return (
    <GridList cellHeight={450} className="grid-list" cols={2} spacing={4}>
      {houseList.map((item) => {
        return (
          <GridListTile key={item.id} cols={1}>
            <HouseCard {...item} />
          </GridListTile>
        );
      })}
    </GridList>
  );
}

export default Main;
