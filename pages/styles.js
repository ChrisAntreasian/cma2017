import css from 'styled-jsx/css'
import portrait from './img/chris-a-self-portrait.png'
import grid from '~/styles/grid'

export default css`
    section {
        display: flex;
        justify-content: space-between;
        position: relative;
        min-height: 29.5rem;

    }
    .portrait {
        content:'';
        display: block;
        position: absolute;
        bottom: 0;
        width: ${grid[12]};
        height: 29.5rem;
        background-image: url("${portrait}");
        background-position-x: 67%;
        background-repeat: no-repeat;
        background-size: 500px auto;
        z-index: -1;
    }
    article {
        width: ${grid[5]};
        padding: 1.3rem;
    }
    @media only screen and (max-width: 54em) {
         section {
            height: auto;
            flex-direction: column;
         }
         .portrait {
            content:'';
            position: initial;
            order: 2;
            width: ${grid[9]};
            height: 29.5rem;
            background-image: url("${portrait}");
            background-position-x: center;
            background-repeat: no-repeat;
            background-size: 500px auto;
            z-index: -1;
         }
         article {
            width: ${grid[9]}
        }
    }

    @media only screen and (max-width: 31em) {
        section {
            flex-direction: column;
        }
        .portrait {
            width: ${grid[12]};
            order: 3;
        }
        article {
            width: ${grid[12]};
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
    section {
        width: ${grid[7]};
        margin-left: ${grid[2]};
        display: flex;
        flex-direction: column;
    }
    article {
        padding: 0 0.65rem;
        background: white;
        min-height: 16.45rem;
        padding: 1.3rem;
    }
    @media only screen and (max-width: 31em) {
        section {
            width: ${grid[12]};
            padding: 0 0.65rem;
            margin-left: 0;
        }
    }
    nav {
        color: white;
    }
    a {
        margin: 0 1.3rem 1.3rem 0;
        cursor: pointer;
    }
`
