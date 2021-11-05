import { Col, Row } from "antd";
import React from "react";
import ListCard from "../../components/ListCard";

function index() {
  return (
    <Row gutter={[20, 20]} className="container">
      <Col span={6}>
        <ListCard name="Assignment Name" href="/assignments/detail" />
      </Col>
      <Col span={6}>
        <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      </Col>{" "}
      <Col span={6}>
        <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      </Col>{" "}
      <Col span={6}>
        <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      </Col>{" "}
      <Col span={6}>
        <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      </Col>{" "}
      <Col span={6}>
        <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      </Col>{" "}
      <Col span={6}>
        <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      </Col>{" "}
      <Col span={6}>
        <ListCard name="Assignment Name" href="/assignments/detail" />{" "}
      </Col>
    </Row>
  );
}

export default index;
