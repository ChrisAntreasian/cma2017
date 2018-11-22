import css from 'styled-jsx/css'

export default css`
    .posts {
        width: 74.9997%;
        padding: 0.65rem;
    }
    @media only screen and (max-width: 31em) {
        .posts {
            width: 100%;
        }
    }
`

export const post = css`
    article {
        width: 100%;
        padding: 1.3rem;
        margin: 0.65rem 0;
        border-radius: 4px;
        background: white;
    }
    article:first-of-type {
        margin-top: 0;
    }
    article h3 {
        margin-top: 0;
    }
`
