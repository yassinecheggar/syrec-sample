import { createStyles } from "antd-style";
import { theme } from "@assets/theme/theme";
export const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn {
      padding: 1rem;
      height: unset;
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 90%;

      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
      -moz-box-sizing: border-box; /* Firefox, other Gecko */
      box-sizing: border-box;
    }
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      color: ${theme.colors.primary.regular};
      text-align: center;
      font-family: "poppins";
      border-radius: 10px;
      border: 1px solid rgba(0, 113, 206, 0.05);
      background: linear-gradient(
          0deg,
          rgba(0, 113, 206, 0.1) 0%,
          rgba(0, 113, 206, 0.1) 100%
        ),
        #fff;
      box-shadow: none;
      &:hover {
        border: 1px solid rgba(0, 113, 206, 0.3);
        outline: 1px solid rgba(0, 113, 206, 0.3);
        background: linear-gradient(
            180deg,
            ${theme.colors.primary.regular} 43.48%,
            rgba(0, 113, 206, 0.72) 104.35%
          ),
          #fff;
        color: #fff;
      }
    }

    &.${prefixCls}-btn-default:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      &.btn-secondary {
        color: ${theme.colors.primary.regular};
        text-align: center;
        font-family: "poppins";
        border-radius: 10px;
        border: 1px solid rgba(0, 113, 206, 0.05);
        background: #fff;
        box-shadow: none;
        &:hover {
          border: 4px solid rgba(0, 113, 206, 0.05);
          /* border: transparent; */
          background: ${theme.colors.primary.aliceblue};
          color: ${theme.colors.primary.brightblue};
        }
      }
    }
    /* &.${prefixCls}-btn-variant-outlined {
      color: unset;
      border-color: none;
    } */
  `,
  menu: css`
    &.ant-menu-light {
      background: transparent;
    }
    .${prefixCls}-menu-item {
      color: ${theme.colors.monoChrome.regular};
      &.${prefixCls}-menu-item:not(.${prefixCls}-menu-item-selected):hover {
        color: ${theme.colors.primary.regular};
        background-color: ${theme.colors.primary.aliceblue};
      }
      &.${prefixCls}-menu-item-selected {
        background: ${theme.colors.primary.lightcyan};
        color: ${theme.colors.primary.regular} !important;
      }
    }

    &.${prefixCls}-menu-light .${prefixCls}-menu-submenu-title {
      color: ${theme.colors.monoChrome.regular};
    }

    &.${prefixCls}-menu-light:not(.ant-menu-horizontal)
      .${prefixCls}-menu-submenu-title:hover {
      background-color: ${theme.colors.primary.aliceblue};
    }

    .${prefixCls}-menu-submenu-selected {
      .${prefixCls}-menu-submenu-title {
        background: ${theme.colors.primary.lightcyan};
        color: ${theme.colors.primary.regular} !important;
      }
    }
    &.${prefixCls}-menu-sub {
      background: transparent;
    }
    &.${prefixCls}-menu-submenu {
      background: transparent;
    }

    &.ant-menu {
      .ant-menu-item {
        border-radius: 6px;
      }
      .ant-menu-submenu {
        .ant-menu-sub {
          background-color: transparent;
          .ant-menu-item {
            position: relative;
            padding: 0.75rem 1.125rem !important;
            /* background-color: yellow; */
            border-radius: 0px 6px 6px 0px;
            width: auto;
            border-left: 3px solid ${theme.colors.primary.lightsteelblue};
            margin: 0 4px 0 34px;
            overflow: visible;
            &::after {
              position: absolute;
              left: -4px;
              top: 50%;
              transform: translateY(-50%);
              width: 6px;
              height: 6px;
              background-color: ${theme.colors.primary.lightsteelblue};
              border-radius: 50%;
              opacity: 1;
            }
          }
          .ant-menu-item-selected {
            border-color: ${theme.colors.primary.regular};
            &::after {
              background-color: ${theme.colors.primary.regular};
            }
          }
        }
      }
    }
  `,
}));
