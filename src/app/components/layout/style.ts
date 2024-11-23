import { centerContent } from "@/assets/theme/composition";
import { Layout } from "antd";
import styled from "styled-components";

export const CustomLayout = styled(Layout)`
  height: 100%;
  .layout-header {
    display: flex;
    justify-content: space-between;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.white.ghostWhite};
    border-bottom: 1px solid rgba(0, 113, 206, 0.1);
    height: 70px;

    .logo-container {
      ${centerContent}
      width: 20%;
      height: 100%;
      border-right: 1px solid rgba(0, 113, 206, 0.1);
      padding: 0 1.5rem;
    }
    .profile-action-wrapper {
      display: flex;
      padding: 0 1.5rem;

      .profile-action-container {
        ${centerContent}
        gap: 2rem;

        .avatar-container {
          ${centerContent}
          gap: 8px;
          cursor: pointer;
        }
      }
    }
  }
  .layout-slider {
    background-color: ${({ theme }) => theme.colors.white.ghostWhite};
    width: 20%;
    border-right: 1px solid rgba(0, 113, 206, 0.1);
  }
  .search-container {
    padding: 1.5rem 1rem;
  }
`;
export const CustomMenuItem = styled.div`
  ${centerContent}
  justify-content: space-between;
  width: 100%;
  .count{

  }
`;
