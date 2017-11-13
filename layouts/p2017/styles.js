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

    .clear:after {
        content: '';
        display: block;
        clear: both;
    }
   
    main {
        width: 100%;
        padding: 30px 0 100px;
        box-sizing: border-box;
    }
    section {
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;
        padding: 0 0.65rem;
        position: relative;
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