import React, { useEffect, useState } from "react";
import { List, FlexboxGrid, Icon, Avatar, Panel, Col, Row, Button, Modal } from "rsuite";
import House from "../../../interfaces/house";
import { PlacemarkProps } from "../../../interfaces/placemark";
import MapComp from "../../MapComp";
import MapModal from "../../MapModal";
import "./index.css";



function HouseCard(props: House) {

  const [show, setShow] = useState(false);
  const [showOnMap, setShowOnMap] = useState(false);
  const [placemarkHouse, setPlacemarkHouse] = useState<PlacemarkProps>();
  let date = new Date(props.createdAt)

  useEffect(()=> {
    setPlacemarkHouse({
      content: props.description,
      coordinates: [Number(props.ltd), Number(props.lng)],
      header: props.title,
      footer: `Price: $${props.price}`
    })
  }, [])

  function showMore(houseId: string) {
    console.log(houseId)
    setShow(true);
  }


  function close() {
    setShow(false);
  }


  function showMap() {
    console.log(props.lng)
    setShowOnMap(true);
  }


  return (
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
      <img src={`https://picsum.photos/id/${props.id}/240/240`} height="240" />
      <Panel>
        <div className="panel-body">

          <h4>{props.title}</h4>
          <div className="button-container">

            <p>
              <small>{props.city}</small>
            </p>

            <Button onClick={(e) => {
              e.preventDefault()
              showMore(props.id)
            }} appearance="ghost">More</Button>
          </div>
        </div>
      </Panel>
      <Modal show={show} onHide={(e) => {
        close();
      }}>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showOnMap ? <Panel bordered bodyFill>
            <MapComp mapEvents={true} width={"500px"} house={placemarkHouse} center={placemarkHouse?.coordinates}/>
          </Panel> : <Panel bordered shaded>
            <span>Description: {props.description}</span>
            <p>Added at {date.toLocaleString()}</p>
            <p>Country: {props.country}, City: {props.city}</p>
            <strong>Price: ${props.price} </strong>
          </Panel>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => {
            close();
            alert('Your request is pending')
          }} appearance="primary">
            Buy
            </Button>
          <Button onClick={(e) => {
            showMap();
          }} appearance="default">
            Show on map
            </Button>

          <Button onClick={(e) => {
            close();
          }} appearance="subtle">
            Cancel
            </Button>
        </Modal.Footer>
      </Modal>
    </Panel>
  );
}

export default HouseCard;
