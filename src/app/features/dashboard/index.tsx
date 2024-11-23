import ButtonKit from "@/components/core/button/ButtonKit";
import { useUser } from "@/hooks/store/useUser";
import { Button } from "antd";
import React from "react";

function DashboardComponent() {
  const { user, fetchUser } = useUser();

  return (
    <div>
      DashboardComponent
      <ButtonKit btnType="primary" onClick={() => fetchUser("1")}>
        getdata
      </ButtonKit>
    </div>
  );
}

export default DashboardComponent;
