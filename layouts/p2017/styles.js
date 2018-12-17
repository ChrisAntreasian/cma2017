import css, { global } from 'styled-jsx/css'
import bgTransparency from '~/img/transparent.png'

export default css.global `
    html, body {
        height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      font-size: 16px;
      line-height: 1.6rem;
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
        padding: 2.6rem 0 0;
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
