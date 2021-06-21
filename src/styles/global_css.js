import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    

    html {
        width:100vw; 
        height:100vh;
    }

    body {
        font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        width:100%; 
        height:100%; 
    }
`;

