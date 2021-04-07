import { timeStamp } from "node:console";
import React from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button,
} from "rsuite";
import { IAddHouse } from "../../../interfaces/addHouse";

interface AddHouseFormState {
  title: string;
  price: number;
  ltd: number;
  lng: number;
  city: string;
  country: string;
  description: string;
}

interface IAddHouseForm {
  house: IAddHouse;
  submit: Function;
}

class AddHouseForm extends React.Component<IAddHouseForm, AddHouseFormState> {
  constructor(props: IAddHouseForm) {
    super(props);
    this.state = {
      title: "",
      price: 0,
      ltd: this.props.house.ltd,
      lng: this.props.house.lng,
      city: this.props.house.city,
      country: this.props.house.country,
      description: this.props.house.description,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    let house = { ...this.state }
    console.log(house)
    this.props.submit(house);
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            name="title"
            onChange={(e) => {
              this.setState({
                title: e,
              });
            }}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Price</ControlLabel>
          <FormControl
            name="price"
            type="number"
            onChange={(e) => {
              this.setState({
                price: e,
              });
            }}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Country</ControlLabel>
          <FormControl
            name="country"
            onChange={(e) => {
              this.setState({
                country: e,
              });
            }}
            value={
              this.props.house?.description ? this.props.house.country : ""
            }
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>City</ControlLabel>
          <FormControl
            name="city"
            onChange={(e) => {
              this.setState({
                city: e,
              });
            }}
            value={this.props.house?.description ? this.props.house.city : ""}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Description</ControlLabel>
          <FormControl
            name="description"
            onChange={(e) => {
              this.setState({
                description: e,
              });
            }}
            value={
              this.props.house?.description ? this.props.house.description : ""
            }
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>lng</ControlLabel>
          <FormControl
            name="lng"
            onChange={(e) => {
              this.setState({
                lng: parseInt(e.toString()),
              });
            }}
            value={this.props.house.lng ? this.props.house.lng : 0}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>ltd</ControlLabel>
          <FormControl
            name="ltd"
            onChange={(e) => {
              this.setState({
                ltd: parseInt(e.toString()),
              });
            }}
            value={this.props.house.ltd ? this.props.house.ltd : 0}
          />
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button
              onClick={this.submitForm}
              type="submit"
              appearance="primary">
              Submit
            </Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    );
  }
}

export default AddHouseForm;
