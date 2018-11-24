import css from 'styled-jsx/css'

export default css`
    aside {
        padding: 0.65rem;
        width: 24.9998%;
        position: absolute;
        right: 0;
        top: 0;
    }
    @media only screen and (max-width: 31em) {
        aside {
            width: 100%;
            position: initial;
            order: 2;
        }
    }

`
export const post = css`
    article {
        margin-top: 1.3rem;
        padding: 1.3rem;
        background: #99ccff;
        border-radius: 5px
    }
    article:first-of-type {
        margin-top: 0;
    }
    img {
        width: 100%;
    }
`
