import React from "react";
import { Outlet } from "react-router-dom";
import { CustomLayout, CustomMenuItem } from "./style";
import { LogoCdm } from "@/assets/images";
import { Badge, Dropdown, Input, Menu, MenuProps } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  DownOutlined,
} from "@ant-design/icons";
import ButtonKit from "../core/button/ButtonKit";
import { AnnouncementIcon, FilePlusIcon, HomeLineIcon } from "@/assets/icons";
import Avatar from "../core/avatar";

function Layout() {
  const { Header, Sider, Content } = CustomLayout;
  type MenuItem = Required<MenuProps>["items"][number];
  interface MenuItemProps {
    label: string;
    count: number;
  }
  const MenuItem: React.FC<MenuItemProps> = ({ label, count }) => (
    <CustomMenuItem>
      <p>{label}</p>
      <Badge count={ count} />

      {/* <div className="count">{count}</div> */}
    </CustomMenuItem>
  );
  function getItem(
    label: React.ReactNode,

    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem("Dashboard", "1", <HomeLineIcon />),
    getItem("User", "sub1", <AnnouncementIcon />, [
      getItem(<MenuItem label="Affecter" count={12} />, "3"),
      getItem(<MenuItem label="Analyser" count={10} />, "4"),
      getItem(<MenuItem label="Compléter" count={42} />, "5"),
    ]),
  ];

  return (
    <CustomLayout>
      <Header className="layout-header">
        <div className="logo-container">
          <LogoCdm />
        </div>
        <div className="profile-action-wrapper">
          <div className="profile-action-container">
            <ButtonKit icon={<FilePlusIcon />} btnType="primary">
              Nouvelle réclamation
            </ButtonKit>
            <Dropdown menu={{ items }}>
              <div className="avatar-container">
                <Avatar>UB</Avatar>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>

      <CustomLayout>
        <Sider width="20%" className="layout-slider">
          <div className="search-container">
            <Input placeholder="Trouver une réclamation" />
          </div>
          <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
        </Sider>

        <Content
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Content>
      </CustomLayout>
    </CustomLayout>
  );
}

export default Layout;
