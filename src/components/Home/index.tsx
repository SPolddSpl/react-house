import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Content, FlexboxGrid, Header } from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
import HeaderComp from "../Header";
import Main from "../Main";

function Home() {
  return (
    <div>
      <Container>
        <Header>
          <HeaderComp />
        </Header>
        <Content>
          <FlexboxGrid justify="center" align="top">
            <FlexboxGridItem>
              <Switch>
                <Route path={`/home`} component={Main} />
                <Route path={`/`} exact />
              </Switch>
            </FlexboxGridItem>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
}

export default Home;
