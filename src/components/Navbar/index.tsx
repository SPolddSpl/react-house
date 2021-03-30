import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Nav, Avatar, Icon, Navbar, Dropdown } from "rsuite";

function NavbarComp(props: any) {
  const { path, url } = useRouteMatch();
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
              eventKey="search"
              onSelect={props.activeKey}
              componentClass={Link}
              to={`/search`}>
              Search
            </Nav.Item>
          </Nav>
          <Nav pullRight appearance="default">
            <Nav.Item icon={<Icon icon="unlock-alt" />}>Login</Nav.Item>
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
