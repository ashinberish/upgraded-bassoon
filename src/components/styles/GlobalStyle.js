import { createGlobalStyle } from "styled-components";
import FiraCode from '../../assets/fonts/FiraCodeRegular.ttf';
import CalibriR from '../../assets/fonts/Calibre-Regular.ttf';
import CalibriB from '../../assets/fonts/Calibre-Bold.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:'FiraCode' ;
        src: url(${FiraCode}) format('truetype');
    }
    @font-face {
        font-family:'Calibre' ;
        src: url(${CalibriR}) format('truetype');
    }
    @font-face {
        font-family:'Calibre' ;
        src: url(${CalibriB}) format('truetype');
        font-weight: bold;
    }
    :root{
        --white:#e6f1ff;
        --dark-navy:#020c1b;
        --navy:#0a192f;
        --navy-shadow:rgba(2,12,27,0.7);
        --green: #64ffda;
        --green-tint: rgba(100,255,218,0.1);
        --slate: #8892b0;
        --light-slate: #a8b2d1;
        --lightest-slate:#ccd6f6;
    }
    ::-webkit-scrollbar {
         width: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(----slate);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--lightest-slate);
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--light-slate);
    }
    *{
        margin: 0;
        padding: 0;
        font-size: 62.5%;
        box-sizing: border-box;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    body{
        background-color: var(--navy);
        font-family: 'Calibre';
    }
    .dhGy53{
        display: none;
    }
`

export default GlobalStyle;