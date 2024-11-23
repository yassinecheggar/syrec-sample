import { Button as antButton } from "antd";
import styled from "styled-components";

export const Button = styled(antButton)`
  &.ant-btn-custom-text {
    color: #1890ff;
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 4px 0;

    &:hover {
      color: #40a9ff;
      background: rgba(24, 144, 255, 0.1);
    }

    &:active {
      color: #096dd9;
    }
  }
`;
