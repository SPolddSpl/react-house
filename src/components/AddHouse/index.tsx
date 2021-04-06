import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button,
  Schema,
  Alert,
  FlexboxGrid,
  Row,
  Grid,
  Input,
  Loader,
} from "rsuite";
import Col from "rsuite/lib/Carousel";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
import { IAddHouse } from "../../interfaces/addHouse";
import House from "../../interfaces/house";
import HouseService from "../../services/house-service";
import MapService from "../../services/map-service";
import MapComp from "../MapComp";
import AddHouseForm from "./AddHouseForm";
const { StringType, NumberType } = Schema.Types;

function AddHouse() {
  let history = useHistory();
  const [houseCoord, setHouseCoord] = useState<number[]>([]);
  const [house, setHouse] = useState<IAddHouse>();

  const mapService = new MapService();
  const model = Schema.Model({
    title: StringType().isRequired("This field is required"),
    price: NumberType().isRequired("This field is required"),
    country: StringType().isRequired("This field is required"),
    city: StringType().isRequired("This field is required"),
    description: StringType().isRequired("This field is required"),
    lng: NumberType().isRequired("This field is required"),
    ltd: NumberType().isRequired("This field is required"),
  });
  async function submitForm(house: IAddHouse) {
    let service = new HouseService();
    const res = await service.addHouse(house);
    if (res.status > 200 && res.status < 300) {
      Alert.success("House added");
      history.push('/home');
    }
  }

  useEffect(() => {
    if (houseCoord.length) {
      mapService.getDescByCoor(houseCoord).then((data) => {
        if (data.results[0]) {
          let pointInfo = data.results[0].components;
          setHouse({
            city: pointInfo.city,
            country: pointInfo.country,
            ltd: houseCoord[0],
            lng: houseCoord[1],
            description: data.results[0].formatted,
          });
        }
      });
    }
  }, [houseCoord]);

  function newCoordinates(coordinates: number[]) {
    setHouseCoord(coordinates);
  }

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <MapComp mapEvents={true} width={"500px"} coords={newCoordinates} />
      {house ? (
        <AddHouseForm house={house} submit={submitForm} />
      ) : (
        <div>
          <Loader content="Please choose point at the map" />
        </div>
      )}
    </div>
  );
}

export default AddHouse;
