import { AliasToken } from "antd/es/theme/internal";
import { Theme } from "@/types/theme";
import { OverrideToken } from "antd/es/theme/interface";
import { css, Interpolation } from "styled-components";
import { Styles } from "styled-components/dist/types";

const baseColor = {
  white: {
    white: "#ffffff",
    ghostWhite: "#FAFCFE ",
  },
  black: "#000000",
  gray: {
    100: "#f2f2f2",
    200: "#FFFFFF5C ",
  },
  heading: {
    regular: "#222328",
  },
  body: {
    bold_gray: "#767874",
    // heading color
  },
  transparent: "transparent",
  primary: {
    regular: "#0071CE",
    aliceblue: "#F4FAFF ",
    brightblue: "#0F93FF",
    lightcyan: "#E9F5FF",
    lightsteelblue: "#D7E8F5",
  },
  secondary: {
    regular: "#E7004C ",
  },
  yellow: {
    regular: "#FFAD5E",
    hover: "#FFB369",
    alternate: "#f4c243",
    warning: "#EE6D00",
  },

  monoChrome: {
    light: "#6E7191", //descrption 700
    regular: "#4E4B66",

    400: "#494BE9",
    blue: {
      regular: "#E0EDF7",
      regular_tint: "#EAF3F9",
    },
  },
  red: {
    dark: "#9f1312fa",
    regular: "#dd3938",
    light: "#ffdede",
  },

  system: {
    line: "#D9DBE9",
  },
};

export const breakpoints = {
  small: "600px",
  medium: "768px",
  large: "1024px",
};

export const theme = {
  colors: {
    ...baseColor,
  },

  fontSizes: {
    xs: "0.545rem",
    sm: "0.636rem",
    base: "0.712rem",
    md: "0.81rem",
    lg: "0.909rem",
    xl: "1rem",
    "2xl": "1.363rem",
    "3xl": "1.636rem",
    "4xl": "1.809rem",
    "5xl": "2.181rem",
    "6xl": "3.4rem",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    bolder: 900,
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
    monospace: "Roboto, sans-serif",
  },
  spacing: {
    none: 0,
    xs: ".25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
    "2xl": "8rem",
    "3xl": "16rem",
  },
  breakpoints: {
    ...breakpoints,
  },
};

export const antToken = (props: Theme): Partial<AliasToken> => ({
  colorPrimary: props.colors.primary.regular,
  fontFamily: "poppins",
  // fontSize: 12,
});
export const antComponent = (props: Theme): OverrideToken => ({
  Button: {
    colorPrimaryBg: "red",
  },
});

interface Breakpoints {
  small: string;
  medium: string;
  large: string;
}

export function respondTo(prop: keyof Breakpoints) {
  return function (
    styles: Styles<object>,
    ...interpolations: Interpolation<object>[]
  ): ReturnType<typeof css> {
    return css`
      @media (max-width: ${({ theme }) => theme.breakpoints[prop]}) {
        ${css(styles, ...interpolations)}
      }
    `;
  };
}

// type CSSHelper = typeof css;

// export const respondTo = (prop: keyof Breakpoints): CSSHelper => {
//   return ((strings: CSSObject, ...args: Interpolation<object>[]) => css`
//     @media (max-width: ${({ theme }) => theme.breakpoints[prop]}) {
//       ${strings}
//     }
//   `) as CSSHelper;
// };
export const doWork = (prop: keyof Breakpoints) => {
  // Return a function that uses css tagged template literal
  return (strings: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints[prop]}) {
      ${css(strings, ...args)}
    }
  `;
};
