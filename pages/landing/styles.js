import css from 'styled-jsx/css'
import portrait from './img/chris-a-self-portrait.png'

export default css`
    section {
        position: relative;
        height: 29.5rem;
    }
    section:after {
        content:'';
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 29.5rem;
        background-image: url("${portrait}");
        background-position-x: 67%;
        background-repeat: no-repeat;
        background-size: 500px auto;
        z-index: -1;
    }
    .welcome {
        width: 41.66665%
        padding: 1.3rem;
    }
    @media only screen and (max-width: 54em) {
         section {
            height: auto;
         }
         section:after {
            content:'';
            display: block;
            position: relative;
            top: 0;
            width: 100%;
            height: 29.5rem;
            background-image: url("${portrait}");
            background-position-x: center;
            background-repeat: no-repeat;
            background-size: 500px auto;
            z-index: -1;
         }
         .welcome {
            width: 74.99997%
        }
    }

    @media only screen and (max-width: 31em) {
        .welcome {
            width: 100%
        }
        h1 {
            text-align: center;
        }
    }

`

export const switcher = css`
    .wrap {
        padding: 1.3rem 0;
        background-image: linear-gradient(to bottom, #1C5499, #15447e);
    }
    .switcher {
        width: 58.33332%;
        padding: 0 0.65rem;
        margin-left: 16.66665%;
    }
    article {
        background: white;
        min-height: 16.45rem;
        padding: 1.3rem;
    }

    @media only screen and (max-width: 31em) {
        .switcher {
            width: 100%;
            padding: 0 0.65rem;
            margin-left: 0;
        }
    }
`
