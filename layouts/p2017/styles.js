import css from 'styled-jsx/css'
import bgTransparency from 'img/transparent.png'

export default css`
    html, body {
        height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      font-size: 16px;
      background: #00cbff;
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
    }
    .alignright {
        float: right;
    }
    .aligncenter {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`