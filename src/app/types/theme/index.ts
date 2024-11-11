import { CSSObject } from "@ant-design/cssinjs";
import { css, Interpolation, RuleSet } from "styled-components";

export interface Theme {
  colors: any;
  fontSizes: {
    [key: string]: string;
  };
  fontWeights: {
    [key: string]: number;
  };
  fonts: {
    [key: string]: string;
  };
  breakpoints:{
    [key: string]: string;
  }
}

export interface CustomAntTokenTheme {
  colors: {
    [key: string]: string;
  };
  fontSizes: {
    [key: string]: string;
  };
  fontWeights: {
    [key: string]: number;
  };
  fonts: {
    [key: string]: string;
  };
}
