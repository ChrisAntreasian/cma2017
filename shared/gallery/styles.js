import css from 'styled-jsx/css'
import grid from '~/styles/grid'

export default css`
    section {
        justify-content: center;
    }
    img {
        width: 120px;
        margin: 0 10px;
    }
    figure {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    figure img {
        width: auto;
        height: 350px;
    }
`