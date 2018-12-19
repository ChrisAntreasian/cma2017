import css from 'styled-jsx/css'
import bgTransparency from '~/img/transparent.png'
import grid from '~/styles/grid'

export default css`
    :global(.quint-book img) {
        width: ${grid[12]};
    }
    article {
        background-image: url("${bgTransparency}");
        padding: 20px;
        margin: 0 auto;
        max-width: 770px;
        width: ${grid[12]};
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`