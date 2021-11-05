import { Col, Row } from "antd";
import React from "react";
import ListCard from "../../components/ListCard";

function index() {
  return (
    <Row className="container" justify="space-between">
      <ListCard name="Course Name" href="/courses/detail" />
      <ListCard name="Course Name" href="/courses/detail" />{" "}
      <ListCard name="Course Name" href="/courses/detail" />{" "}
      <ListCard name="Course Name" href="/courses/detail" />{" "}
      <ListCard name="Course Name" href="/courses/detail" />{" "}
      <ListCard name="Course Name" href="/courses/detail" />{" "}
      <ListCard name="Course Name" href="/courses/detail" />{" "}
      <ListCard name="Course Name" href="/courses/detail" />{" "}
    </Row>
  );
}

export default index;
