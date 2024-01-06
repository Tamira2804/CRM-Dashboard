import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), url('/src/assets/fonts/Poppins-Regular.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

   @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), url('/src/assets/fonts/Poppins-Medium.ttf') format('ttf');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

   @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), url('/src/assets/fonts/Poppins-SemiBold.ttf') format('ttf');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --white: #fff;
    --green: #008767;
    --red: #df0404;
    --gray: #eee;
    --black: #292d32;
    --violet: #5932EA;

    --bg-secondary: #fafbff;
    --bg-pagination: #f5f5f5;
    --bg-active: #ffc5c5;
    --bg-primary: #fff;
    --bg-inactive: rgba(22, 192, 152, 0.38);

    --text-primary: #292d32;
    --text-secondary: #b5b7c0;
    --text-pagination: #404b52;
    --text-active: #008767;
    --text-inactive: #df0404;
    --text-position: #757575;
  }

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
     body {
    font-family: 'Poppins';
    background-color: var(--bg-primary);
    color: var(--text-primary);
  }

   a {
    text-decoration: none;
  }

img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  `;
