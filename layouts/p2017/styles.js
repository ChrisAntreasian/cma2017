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
    }

    .clear:after {
        content: '';
        display: block;
        clear: both;
    }
   
    .wrap {
        width: 100%;
        padding: 0 1.3rem;
        box-sizing: border-box;
    }

    .main {
        margin: 0 auto;
        max-width: 1170px;
        background-image: url("${bgTransparency}");
    }

    .main section{
        padding: 50px 0 100px;
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

export const main = css`
   
`