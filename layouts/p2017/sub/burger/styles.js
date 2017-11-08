import css from 'styled-jsx/css'

export default css`
    .burger {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100px;
        height: 100px;
    }
    .overlay {
        content: '';
        display: block;
        position: absolute;
        background: orange;
        z-index: 502;
        bottom: 0;
        left: 0;
        width: 100px;
        height: 100px;
    }
    .navigation {
        position: absolute;
        bottom: 0;
        z-index: 501;
        display: flex;
        transition: height 1s ease in;
        transition: top 1s ease-out;
        flex-direction: column;
        justify-content:space-around;

    }
`
export const burgerLink = css`
    .link {
        width: 100%;
        margin-bottom: 10px;
    }
    .linkImage {
        width: 100px;
        height: auto;
    }
    .linkImage img {
        width: 100%;
    }
`