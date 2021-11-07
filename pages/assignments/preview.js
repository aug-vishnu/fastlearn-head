import { Col, Row } from "antd";
import React from "react";
import QuestionDetail from "../../components/TestSeries/QuestionDetail";
import QuestionState from "../../components/TestSeries/QuestionState";
import QuestionTracker from "../../components/TestSeries/QuestionTracker";
import TestDetailAtnBtn from "../../components/TestSeries/TestDetailAtnBtn";
function preview() {
  return (
    <div className="container">
      <TestDetailAtnBtn isEnroll="true" />
      <Row justify="space-between">
        <Col span={10} className="wrapper">
          <h5>Questions tracker</h5>
          <QuestionTracker></QuestionTracker>
        </Col>
        <Col span={13} className="wrapper">
          <QuestionDetail />
        </Col>
      </Row>
    </div>
  );
}

export default preview;
