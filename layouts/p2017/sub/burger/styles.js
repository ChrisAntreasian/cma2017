import css from 'styled-jsx/css'

export default css`
    .burger {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 6.5rem;
        height: 6.5rem;
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
            top: 0;
            right: 0;
            left: auto;
            bottom: auto;
        }
        nav {
            position: fixed;
            width: 100%;
            display: none;
            padding-top: 6.5rem;
            top: 0;
            margin-bottom: 0;
        }

    }
`
export const burgerLink = css`
    .link {
        width: 100%;
        margin: 0.65px 0 ;
    }
    .linkImage {
        width: 6.5rem;
        height: auto;
    }
    .linkImage img {
        width: 100%;
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
        width: 100%;
    }
    img {
        width: 100%;
    }
`
