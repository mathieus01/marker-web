import React from "react";
import moment from "moment";
import { Container } from "./styles";

export default function Title({ title, noDate }) {
  return (
    <Container>
      <div className="labels">
        <span>{title}</span>
        {!noDate && <small>{moment().format("DD, MMMM")}</small>}
      </div>
    </Container>
  );
}
