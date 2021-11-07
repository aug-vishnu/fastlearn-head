import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import { Menu } from "antd";
import TestDetailAtnBtn from "../../components/TestSeries/TestDetailAtnBtn";
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
      <TestDetailAtnBtn isEnroll="false" />
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
          title="Question One"
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          style={{ margin: "1rem 0" }}
          key="sub2"
          icon={<AppstoreOutlined />}
          title="Question Two"
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu style={{ margin: "1rem 0" }} key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          style={{ margin: "1rem 0" }}
          key="sub4"
          icon={<SettingOutlined />}
          title="Question Three"
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default detail;
