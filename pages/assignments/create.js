import { Col, Row } from "antd";
import React, { useState } from "react";

function create() {
  const [loading, setLoading] = useState(false);

  return (
    <Row justify="center" align="middle" className="singleForm">
      <Col span="10">
        <h1>Test series creation </h1>{" "}
        <form>
          <label htmlFor="">Test series Name</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter Test series Name"
            required
          />
          <label htmlFor="">Test series Description</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter Test series Description"
            required
          />
          <label htmlFor="">Releated Courses</label>
          <select
            className="form-control mb-4"
            aria-label="Select Releated Courses"
          >
            <option selected>Select Releated Courses</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label htmlFor="">Test series Due</label>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Enter Test series Due"
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
