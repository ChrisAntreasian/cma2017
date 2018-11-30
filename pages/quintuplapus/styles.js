import css from 'styled-jsx/css'
import bgTransparency from '~/layouts/p2017/img/transparent.png'


export default css`
    :global(.quint-book img) {
        width: 100%;
        height: 100%;
    }
    article {
        background-image: url("${bgTransparency}");
        padding: 20px;
        margin: 0 auto;
        max-width: 770px;
        width: 100%;
        height: 535px;
        display: flex;
        align-items: center;
    }

`