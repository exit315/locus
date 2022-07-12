import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from 'styled-components';

import PoppinsRegularWoff from "../assets/fonts/poppins-regular.woff";
import PoppinsRegularWoff2 from "../assets/fonts/poppins-regular.woff2";
import PoppinsMediumWoff from "../assets/fonts/poppins-medium.woff";
import PoppinsMediumWoff2 from "../assets/fonts/poppins-medium.woff2";
import PoppinsBoldWoff from "../assets/fonts/poppins-bold.woff";
import PoppinsBoldWoff2 from "../assets/fonts/poppins-bold.woff2";
import PoppinsExtraboldWoff from "../assets/fonts/poppins-extrabold.woff";
import PoppinsExtraboldWoff2 from "../assets/fonts/poppins-extrabold.woff2";

export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins Regular';
  src: url(${PoppinsRegularWoff}) format('woff'),
  url(${PoppinsRegularWoff2}) format('woff2');
  font-size: 400;
}

@font-face {
  font-family: 'Poppins Medium';
  src: url(${PoppinsMediumWoff}) format('woff'),
  url(${PoppinsMediumWoff2}) format('woff2');
  font-size: 500;
}

@font-face {
    font-family: 'Poppins Bold';
    src: url(${PoppinsBoldWoff}) format('woff'),
    url(${PoppinsBoldWoff2}) format('woff2');
    font-size: 700;
  }

  @font-face {
    font-family: 'Poppins Extrabold';
    src: url(${PoppinsExtraboldWoff}) format('woff'),
    url(${PoppinsExtraboldWoff2}) format('woff2');
    font-size: 800;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100%;
    min-width: 320px;
    max-width: 1920px;
    margin: 0 auto;
    padding: 85px 150px;

    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
)
