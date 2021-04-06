import React, { useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Nav, Avatar, Icon, Navbar, Dropdown } from "rsuite";

function NavbarComp(props: any) {
  const { path, url } = useRouteMatch();

  const [logged, setLogged] = useState(localStorage.getItem("logged"));
  return (
    <>
      <Navbar>
        <Navbar.Body>
          <Nav {...props} activeKey={props.active} onSelect={props.onSelect}>
            <Nav.Item
              eventKey="home"
              onSelect={props.activeKey}
              icon={<Icon icon="home" />}
              componentClass={Link}
              to={`/home`}>
              Home
            </Nav.Item>
            <Nav.Item
              eventKey="map"
              onSelect={props.activeKey}
              componentClass={Link}
              to={`/map`}>
              Map
            </Nav.Item>
            {logged === "true" ? (
              <Nav.Item
                eventKey="addHouse"
                onSelect={props.activeKey}
                componentClass={Link}
                to={`/add`}>
                Add
              </Nav.Item>
            ) : (
              ""
            )}
          </Nav>
          <Nav pullRight appearance="default">
            <Nav.Item
              componentClass={Link}
              to={"/login"}
              icon={
                logged === "true" ? (
                  <Icon icon="lock" />
                ) : (
                  <Icon icon="unlock-alt" />
                )
              }>
              {logged === "true" ? "Logout" : "Login"}
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </>
  );
}

export default NavbarComp;

/**
 *
 */
