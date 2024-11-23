import React from "react";
import { Outlet } from "react-router-dom";
import { CustomLayout, CustomMenuItem } from "./style";
import { LogoCdm } from "@/assets/images";
import { Badge, Dropdown, Input, Menu } from "antd";
import {
  DownOutlined,
} from "@ant-design/icons";
import ButtonKit from "../core/button/ButtonKit";
import { FilePlusIcon } from "@/assets/icons";
import Avatar from "../core/avatar";
import { useLayout } from "@/hooks/layout/useLayout";

function Layout() {
  const { Header, Sider, Content } = CustomLayout;
  const { items ,onClick } =useLayout();
  
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
          <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} onClick={onClick}  />
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
