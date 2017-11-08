import css from 'styled-jsx/css'
import bgTransparency from 'img/transparent.png'
export default css`
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background: pink;
      font-size: 16px;
    }

    .clear:after {
        content: '';
        display: block;
        clear: both;
    }
   
    .wrap {
        width: 100%;
        padding: 0 1.3rem;
        background: ${bgTransparency}
        box-sizing: border-box;
    }

    .main {
        margin: 38px auto;
        max-width: 1170px;
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