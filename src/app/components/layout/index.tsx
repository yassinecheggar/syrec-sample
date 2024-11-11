import React from "react";
import { Outlet } from "react-router-dom";
import { Layout as CustomLayout } from "antd";

function Layout() {
  const { Header, Sider, Content } = CustomLayout;

  return (
    <CustomLayout className="" style={{ height: "100%" }}>
      <Header className="" style={{ backgroundColor: "#FAFCFE" }}>
        Header
      </Header>
      <CustomLayout>
        <Sider width="20%" className="" style={{ backgroundColor: "#FAFCFE" }}>
          Sider
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
