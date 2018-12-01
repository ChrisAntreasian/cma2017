import css from 'styled-jsx/css'
import bgTransparency from '~/img/transparent.png'


export default css`
    :global(.quint-book img) {
        width: 100%;
    }
    article {
        background-image: url("${bgTransparency}");
        padding: 20px;
        margin: 0 auto;
        max-width: 770px;
        width: 100%;
        display: flex;
        align-items: center;
    }
`