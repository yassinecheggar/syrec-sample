import { createGlobalStyle } from "styled-components";
import { respondTo } from "./theme";

export const GlobalStyles = createGlobalStyle`
 *,
  *::after,
  *::before {
    box-sizing: border-box;
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
  font-size: calc(12px +  ( 7 * ( (100vw - 767px) / (1688 - 767) ) ) ) !important; 
  font-family:  "poppins", sans-serif;
  background-position: center;
  background-size: cover;
}
  body {
    /* font-family: "poppins", Helvetica, Arial, sans-serif; */
    transition: all 0.25s linear;
  }

  h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }

   
    ${respondTo("small")`
        h1,h2,h3,h4,h5,h6,p{
        margin: 0;
        }  
    `}
    `;
