import css from 'styled-jsx/css'

export default css``

export const post = css`
    article {
        margin: 10px 0;
        padding: 10px;
        border: 1px solid black;
        border-radius: 3px;
        display: inline-block;
        width: 100%;
        background: white;
    }
    article:first-of-type {
        margin-top: 0;
    }
`