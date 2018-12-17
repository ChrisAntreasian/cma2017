import css, { global } from 'styled-jsx/css'
import bgTransparency from '~/img/transparent.png'

export default css.global `
    html, body {
        height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      background-image: url("${bgTransparency}");

    }
    html {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        -webkit-box-sizing: inherit;
        -moz-box-sizing: inherit;
        box-sizing: inherit;
    }
    .clear:after {
        content: '';
        display: block;
        clear: both;
    }

    main {
        width: 100%;
        padding: 4.2rem 0 0;
    }
    section {
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;
        position: relative;
        display: flex;
    }
    section:after {
        content: '';
        display: block;
        clear: both;
    }
    .wrap {
        width: 100%;
    }
    .container {
        position: relative;
        width: 1170px;
        margin: 0 auto;
    }
    .wrap:after {
        clear: both;
    }
    @media only screen and (max-width: 54em) {
        .container {
            width: 100%;
        }
    }
    /* wp post styles */

    .alignleft {
        float: left;
        margin: 0 1em 1em 0;
    }
    .alignright {
        float: right;
        margin: 0 0 1em 1em;
    }
    .aligncenter {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .alignleft,
    .alignright,
    .aligncenter {
        max-width: 100%;
        height: auto;
    }
    @media only screen and (max-width: 31em) {
        section {
            flex-direction: column;
        }
    }
`

import fontFiles from "~/fonts";
console.log(fontFiles)
export const fonts = css.global`
    @font-face {
        font-family: 'quat-bold';
        src:
            local: "Quat Bold",
            local: "Quat Bold",
            url(${fontFiles.quattBoldWoff2}) format('woff2'),
            url(${fontFiles.quattBoldWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'quat-italic';
        src: url(${fontFiles.quattItalicWoff2}) format('woff2'),
             url(${fontFiles.quattItalicWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'quat';
        src: url(${fontFiles.quattRegWoff2}) format('woff2'),
             url(${fontFiles.quattRegWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'diavlo-bold';
        src: url(${fontFiles.diavloBoldWoff2}) format('woff2'),
             url(${fontFiles.diavloBoldWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'diavlo-light';
        src: url(${fontFiles.diavloLightWoff2}) format('woff2'),
             url(${fontFiles.diavloLightWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'diavlo-book';
        src: url(${fontFiles.diavloBookWoff2}) format('woff2'),
             url(${fontFiles.diavloBookWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'diavlo-black';
        src: url(${fontFiles.diavloBlackWoff2}) format('woff2'),
             url(${fontFiles.diavloBlackWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'diavlo-medium';
        src: url(${fontFiles.diavloMediumWoff2}) format('woff2'),
             url(${fontFiles.diavloMediumWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    a {
        color: white;
    }
    a:visited {
        color: white;
    }
    html {
        font-size: 16px;
    }
    body {
        font-family: 'quat';
        letter-spacing: 0.01em;
        font-size: 17px;
        line-height: 1.6rem;
        letter-spacing: 0.05em;
    }
    h1, h2, h3, h4, h5 {
        font-family: 'diavlo-bold';
        letter-spacing: 0.1em;
        line-height: 1.1em;
        margin: 0.65rem 0;
        font-weight: normal;
    }
    h1 {
        font-size: 32px;
    }
`
