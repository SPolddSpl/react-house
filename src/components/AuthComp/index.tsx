import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Modal,
  Button,
  ButtonToolbar,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
  Form,
  Alert,
  Tooltip,
  Whisper,
} from "rsuite";

function AuthComp() {
  const [show, setShow] = useState(true);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("logged", "false");
  }, []);

  function close() {
    history.push("/home");
    setShow(false);
  }

  function setValue(val: string, inputName: string) {
    if (inputName === "name") {
      setUserName(val);
    } else {
      setPass(val);
    }
  }

  function submit(user: any) {
    const sampleUser = {
      name: "admin",
      pass: "admin",
    };

    if (userName === sampleUser.name && pass === sampleUser.pass) {
      Alert.success("Logged In");
      localStorage.setItem("logged", "true");
      close();
    } else {
      Alert.error("Username or Pass is invalid");
    }
  }

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormComp setValue={setValue} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={submit} appearance="primary">
          Login
        </Button>
        <Button onClick={close} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function FormComp(props: any) {
  return (
    <Form layout="horizontal">
      <FormGroup>
        <ControlLabel>Username</ControlLabel>
        <Whisper
          trigger="click"
          placement="rightEnd"
          speaker={
            <Tooltip>
              This is a ToolTip for simple text hints. It can replace the title
              property
            </Tooltip>
          }>
          <Button appearance="subtle">Admin</Button>
        </Whisper>
        <FormControl
          name="name"
          onChange={(e) => {
            props.setValue(e, "name");
          }}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Password</ControlLabel>

        <Whisper
          trigger="click"
          placement="rightEnd"
          speaker={
            <Tooltip>
              This is a ToolTip for simple text hints. It can replace the title
              property
            </Tooltip>
          }>
          <Button appearance="subtle">Admin</Button>
        </Whisper>
        <FormControl
          name="password"
          type="password"
          onChange={(e) => {
            props.setValue(e, "pass");
          }}
        />
      </FormGroup>
    </Form>
  );
}

export default AuthComp;
