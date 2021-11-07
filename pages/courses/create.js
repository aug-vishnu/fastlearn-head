import { Col, Row } from "antd";
import React, { useState } from "react";

function create() {
  const [loading, setLoading] = useState(false);

  return (
    <Row justify="center" align="middle" className="singleForm">
      <Col span="10">
        <h1>Course creation form</h1>{" "}
        <form>
          <label htmlFor="">Course Name</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter Course Name"
            required
          />
          <label htmlFor="">Course Description</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter Course Description"
            required
          />
          <label htmlFor="">Course Type</label>
          <select className="form-control mb-4" aria-label="Select Course Type">
            <option selected>Select Course Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label htmlFor="">Course Fee</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter Course Fee"
            required
          />
          <button
            type="submit"
            className="btn btnGrad py-2 btn-block btn-primary"
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>
      </Col>
    </Row>
  );
}

export default create;
