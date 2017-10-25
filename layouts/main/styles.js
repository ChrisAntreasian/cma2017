import css from 'styled-jsx/css'

export default css`
    :global(body) {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background: #052a56;
    }

    :global(.clear:after) {
        content: '';
        display: block;
        clear: both;
    }
   
    :global(.wrap) {
        width: 100%;
        padding: 0 100px;
        box-sizing: border-box;
    }

    /* wp post styles */

    :global(.alignleft) {
        float: left;
    }
    :global(.alignright) {
        float: right;
    }
    :global(.aligncenter) {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`

export const main = css`
    .main {
        margin-top: 38px;
    }
`