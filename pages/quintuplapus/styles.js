import css from 'styled-jsx/css'
import bgTransparency from '~/img/transparent.png'
import grid from '~/styles/grid'

export default css`
    :global(.quint-book img) {
        width: 100%;
    }
    section {
        flex-direction: column;
    }
    article {
        background-image: url("${bgTransparency}");
        padding: 20px;
        margin: 0 auto;
        max-width: 770px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`