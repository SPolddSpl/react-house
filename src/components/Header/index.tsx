import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Header } from "rsuite";
import NavbarComp from "../Navbar";

function HeaderComp() {
  const [active, setActive] = useState("/");

  function handleSelect(activeKey: string) {
    setActive(activeKey);
  }

  return (
    <NavbarComp appearance="subtle" active={active} onSelect={handleSelect} />
  );
}

export default HeaderComp;
