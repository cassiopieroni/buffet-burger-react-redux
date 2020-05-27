import { createGlobalStyle } from 'styled-components';
import burgerImg from './assets/img-burger.jpg';

export default createGlobalStyle`

    /*----RESET CSS -----*/
    /* http://meyerweb.com/eric/tools/css/reset/ 
        v2.0 | 20110126
        License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
        /*----RESET CSS -----*/



    html, body {
        min-width: 600px;
        max-width: 1920px;
        margin: 0 auto;
        background: url(${burgerImg}) no-repeat center center fixed;
        background-size: cover;
        background-color: #012840;

        @media (min-width: 1920px){
            background-size: 100%;
            font-size: 24px;
        }
    }

    #root {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    @font-face {
        font-family: 'Anton';
        src: url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
    }
`;