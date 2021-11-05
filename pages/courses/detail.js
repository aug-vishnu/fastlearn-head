import {
  AppstoreOutlined,
  MailOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import { Button, Col, Menu, Row } from "antd";
import CourseDetailAtnBtn from "../../components/Course/CourseDetailAtnBtn";
import ConceptAddBtn from "../../components/Course/ConceptAddBtn";
const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

function detail() {
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className="container">
      {" "}
      <CourseDetailAtnBtn />
      <Menu
        mode="inline"
        openKeys={openKeys}
        style={{ backgroundColor: "#f5faff" }}
        onOpenChange={onOpenChange}
      >
        <SubMenu
          style={{ margin: "1rem 0" }}
          key="sub1"
          icon={<MailOutlined />}
          title="Chapter One"
        >
          <Menu.Item key="1">
            <Row>
              <Col>Col</Col>
              <Col>Col</Col>
            </Row>
          </Menu.Item>
          <Menu.Item key="2">Concept 2</Menu.Item>
          <Menu.Item key="3">Concept 3</Menu.Item>
          <Menu.Item key="4">
            <ConceptAddBtn />
          </Menu.Item>
        </SubMenu>
        <SubMenu
          style={{ margin: "1rem 0" }}
          key="sub2"
          icon={<AppstoreOutlined />}
          title="Chapter Two"
        >
          <Menu.Item key="5">Concept 5</Menu.Item>
          <Menu.Item key="6">Concept 6</Menu.Item>
          <SubMenu style={{ margin: "1rem 0" }} key="sub3" title="Submenu">
            <Menu.Item key="7">Concept 7</Menu.Item>
          </SubMenu>
          <Menu.Item key="8">
            <ConceptAddBtn />
          </Menu.Item>{" "}
        </SubMenu>
        <SubMenu
          style={{ margin: "1rem 0" }}
          key="sub4"
          icon={<SettingOutlined />}
          title="Chapter Three"
        >
          <Menu.Item key="9">Concept 9</Menu.Item>
          <Menu.Item key="10">Concept 10</Menu.Item>
          <Menu.Item key="11">Concept 11</Menu.Item>
          <Menu.Item key="12">
            <ConceptAddBtn />
          </Menu.Item>{" "}
        </SubMenu>
      </Menu>
    </div>
  );
}

export default detail;
