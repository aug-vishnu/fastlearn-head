import { Col, Row } from "antd";
import React from "react";
import ListCard from "../../components/ListCard";

function index() {
  return (
    <Row className="container" justify="space-between">
      <ListCard name="Assignment Name" href="/assignments/detail" />
      <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
    </Row>
  );
}

export default index;
