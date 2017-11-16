import css from 'styled-jsx/css'

export default css`
    aside {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.65rem;
        background: #1ebcb2;
        width: 24.9998%;
    }
    @media only screen and (max-width: 31em) {
        aside {
            position: relative;
            width: 100%;
        }

`
export const post = css`
    article {
        border-bottom: 1px solid black;
        padding-top: 1.3rem;
    }
    article:first-of-type {
        padding-top: 0;
    }
    img {
        width: 100%;
    }
`