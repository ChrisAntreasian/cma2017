import css from 'styled-jsx/css'
import portrait from './img/chris-a-self-portrait.png'

export default css`
    section {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row; /* Change */
        height: 500px; /* Change. */
        background-image: url("${portrait}");
        background-position-x: center;
        background-position-y: 60px;
        background-repeat: no-repeat;
        background-size: 500px auto;


    }
    .welcome {
        width: 33.33332%
        padding: 0 0.65rem;
    }
    .portrait {
        width: 41.66665%
        padding: 0 0.65rem;
        position: fixed;
    }
`

export const switcher = css`
    .wrap {
        padding: 1.3rem 0;
        background-image: linear-gradient(to bottom, #1C5499, #15447e);
    }
    article {
        background: white;
        min-height: 16.45rem;
        width: 41.66665%;
        margin-left: 16.66665%;
        padding: 0.65rem;
    }
`