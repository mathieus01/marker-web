import React from "react";

import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { Container, Wrapper, Content } from "./styles";

export default function DefaultLayout({ children, props }) {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header props={props} />
          {children}
        </Content>
      </Container>
    </Wrapper>
  );
}
