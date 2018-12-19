import css from 'styled-jsx/css'

import bgTransparency from '~/img/transparent.png'
import grid from '~/styles/grid'

export default css`
    .burger {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 6.5rem;
        height: 6.5rem;
        z-index: 502;
        padding: 1.3rem
    }
    .overlay {
        content: '';
        display: block;
        position: absolute;
        background: orange;
        z-index: 502;
        bottom: 0;
        left: 0;
        width: 6.5rem;
        height: 6.5rem;
    }
    nav {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 501;
        text-align: center;
        border-radius(4px);
        background-image: url("${bgTransparency}");
    }
    .wrap {
        position: fixed;
        bottom: 0;
        z-index: 500;

    }
    @media only screen and (max-width: 31em) {
        .wrap {
            position: fixed;
            top: 0;
            bottom: auto;
        }
        .burger{
            width: 3rem;
            height: 3rem;
            top: 0.65rem;
            right: 0.65rem;
            left: auto;
            bottom: auto;
        }
        nav {
            position: fixed;
            width: ${grid[12]};
            display: none;
            padding-top: 6.5rem;
            top: 0;
            margin-bottom: 0;
        }

    }
`
export const burgerLink = css`
    .link {
        width: ${grid[12]};
        margin: 0.65px 0 ;
    }
    .linkImage {
        width: 6.5rem;
        height: auto;
    }
    .linkImage img {
        width: ${grid[12]};
    }
    @media only screen and (max-width: 31em) {
        .linkImage {
            width: 60%;
            height: auto;
            margin-left: 20%;
        }
    }
`

export const burgerLayer = css`
    .layer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${grid[12]};
    }
    img {
        width: ${grid[12]};
    }
    @media only screen and (max-width: 31em) {
        .layer {
            top: 0;
            right: 0;
            left: auto;
            bottom: auto;
        }
    }
`
