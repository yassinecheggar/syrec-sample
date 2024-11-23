import { Avatar } from "antd";
import styled from "styled-components";

export const CutomAvatar = styled(Avatar)<{ $color?: string }>`
  /* background-color: ${(props) => props.$color}; */
  color: ${(props) => props.$color};

  border: ${(props) => `2px solid ${props.$color}aa`};
  background: ${(props) => `linear-gradient(0deg,${props.$color}60, #fff);`};
  &:hover {
    border: 2px solid ${(props) => props.$color};
    background: ${(props) => `linear-gradient(0deg,${props.$color}80, #fff);`};
  }
`;
