import { createGlobalStyle } from "styled-components";
import { doWork, respondTo } from "./theme";
import { AliasToken } from "antd/es/theme/internal";
import Poppinsttf from "@assets/fonts/Poppins-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
 *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'poppins';
    src: url(${Poppinsttf}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html , body {
  margin: 0;
  padding:0;
  height: 100%;
}

#root{
    height: 100%;  
}


html{
  /* font-size: calc(12px +  ( 7 * ( (100vw - 767px) / (1688 - 767) ) ) ) !important;  */
  
  background-position: center;
  background-size: cover;
  
}
  body {
    font-family:  'poppins' , Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }


    @media only screen and (max-width: 1224px) {
      html{
        font-size:unset;
      }
    }

    ${doWork("medium")`
    
    `}
    
    `;
