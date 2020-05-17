import React from "react";

import LoadingIcon from "../../assets/images/loading.svg";
import { Spinner, Container } from "./styles";

const Loading = () => (
  <Container>
    <Spinner src={LoadingIcon} alt="Carregando" />
  </Container>
);

export default Loading;
