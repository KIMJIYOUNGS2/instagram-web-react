import { createGlobalStyle } from "styled-components";

/* npm i styles-reset */
import reset from "styles-reset";

export const lightTheme = {
  fontColor: "black",
  bgColor: "rgb (38,38,38)",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#000",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    input{
        all:unset;
    }
    body{
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        background-color: ${(props) => props.theme.bgColor};
    }
`;
