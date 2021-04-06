import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Content, FlexboxGrid, Header } from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
import AddHouse from "../AddHouse";
import AuthComp from "../AuthComp";
import HeaderComp from "../Header";
import Main from "../Main";
import MapComp from "../MapComp";
import MapModal from "../MapModal";

function Home() {
  return (
    <div>
      <Container>
        <Header>
          <HeaderComp />
        </Header>
        <Content>
          <FlexboxGrid justify="center" align="top">
              <Switch>
                <Route path={`/home`} component={Main} />
                <Route path={`/map`}>
                  <MapComp mapEvents={false} width={'90vw'}/>
                </Route>
                <Route path={`/login`} component={AuthComp} />
                <Route path={`/add`} component={AddHouse} />
                <Route path={`/`} exact />
              </Switch>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
}

export default Home;
