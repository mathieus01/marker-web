import React from "react";

import { Container } from "./styles";

export default function Card(props) {
  return <Container {...props}>{props.children}</Container>;
}
