import TutorAtnBtn from "../components/Tutor/TutorAtnBtn";
import TutorCta from "../components/Tutor/TutorCta";
import styles from "../styles/Overview.module.css";
import { Col, Row, Space, Table } from "antd";
import { columns, data } from "../context/dummy";

const Index = () => {
  return (
    <div className="container">
      <div className={styles.overviewPage}>
        <TutorAtnBtn></TutorAtnBtn>
        <TutorCta></TutorCta>
        <Row gutter={12} className="mt-4">
          <Col span={8}>
            {" "}
            <h3 className="mb-4">Sample Table</h3>
            <Table columns={columns} dataSource={data} />
          </Col>
          <Col span={16}>
            {" "}
            <h3 className="mb-4">Sample Table</h3>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Index;
