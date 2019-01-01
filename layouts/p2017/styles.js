import css, { global } from 'styled-jsx/css'
import bgTransparency from '~/img/transparent.png'
import grid from '~/styles/grid'
import colors from '~/styles/colors'

export default css.global`
    html, body {
        height: ${grid[12]};
    }
    body {
        margin: 0;
        padding: 0;
        background: ;
        background-image: linear-gradient(to right,
            ${colors.bGrey.down},
            ${colors.bGrey.up},
            ${colors.bGrey.down}
        );
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
        width: ${grid[12]};
        padding: 3.2rem 0 0;
    }
    section {
        width: ${grid[12]};
        max-width: 1170px;
        margin: 0 auto;
        position: relative;
        display: flex;
        font-size: 17px;

    }
    section:after {
        content: '';
        display: block;
        clear: both;
    }
    .wrap {
        width: ${grid[12]};
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
            width: ${grid[12]};
        }
    }
    .capsule {
        padding: 1.3rem;
        margin: 0.65rem 0;
        border-radius: 8px;
        font-size: 17px;
        background-image: linear-gradient(to bottom, ${colors.bWhite.up}, ${colors.bWhite.o});
        box-shadow: 0 0 0.65rem ${colors.bGrey.down};

    }
    .capsule ul {
        padding-left: 20px;
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
        max-width: ${grid[12]};
        height: auto;
    }

    @media only screen and (max-width: 31em) {
        section {
            flex-direction: column;
        }
    }
`