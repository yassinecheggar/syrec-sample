import { css } from "styled-components";

export const scrollBar = css`
  &::-webkit-scrollbar {
    padding-left: 4px;
    width: 8px;
    scrollbar-width: thin;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray.santaGrey};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #e6f0f2;
  }
`;

export const centerContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const alignCenterHorizontal = css`
  display: flex;
  align-items: center;
`;

export const gridAlignCenter = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 20px;
  grid-template-areas: ". . . . .";
`;

export const flexSpaceB = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const formWith = css`
  /* width: 90%; */
  margin: auto;
  /* max-width: 1400px; */
`;

export const inputHeight = css`
  height: 3rem;
  max-height: 50px;
`;

export const inputMobileHeight = css`
  height: 50px;
`;

export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const formWrapper = css`
  width: 100%;
  border-radius: 20px;
  background: #fff;
  padding: 24px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const formInputContainer = css`
  display: flex;
  justify-content: flex-start;
  justify-content: stretch;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  & > div {
    width: 49%;
    gap: 10px;
  }
`;

export const formInputContainerMobile = css`
  gap: 16px;
  & > div {
    width: 100%;
  }
`;
