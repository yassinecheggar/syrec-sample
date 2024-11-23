import ButtonKit from "@/components/core/button/ButtonKit";
import { useUser } from "@/hooks/store/useUser";
import { Button } from "antd";
import React from "react";
import { DashBoardWrapper } from "./style";

function DashboardComponent() {
  const { user, fetchUser } = useUser();

  return (
    <DashBoardWrapper>
      DashboardComponent
      <ButtonKit btnType="primary" onClick={() => fetchUser("1")}>
        getdata
      </ButtonKit>
    </DashBoardWrapper>
  );
}

export default DashboardComponent;
