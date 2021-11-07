import { Col, Image, Radio, Row } from "antd";
import React from "react";

function QuestionDetail() {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <h2>Question 1</h2>
      <Image
        className="pointer"
        preview={false}
        src="https://media.discordapp.net/attachments/820608670810243133/906913440378019892/unknown.png"
      />
      <Row>
        <Radio.Group onChange={onChange} value={value}>
          <Col span={12}>
            <Radio>Radio</Radio>
          </Col>
          <Col span={12}>
            <Radio>Radio</Radio>
          </Col>
          <Col span={12}>
            <Radio>Radio</Radio>
          </Col>
          <Col span={12}>
            <Radio>Radio</Radio>
          </Col>
        </Radio.Group>
      </Row>
    </div>
  );
}

export default QuestionDetail;
