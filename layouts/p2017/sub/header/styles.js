import css from 'styled-jsx/css'
import grid from '~/styles/grid'

export default css`
    header {
        width: ${grid[12]};
        margin: 0 auto;
        padding: 0.65rem;
        background-image: linear-gradient(to bottom, #1C5499, #15447e);
        color: white;
        position: fixed;
        top: 0;
        z-index: 50;
    }
    a {
        color: white;
        cursor: pointer;
        font-family: 'diavlo-black';
        font-size: 22px;
    }
    a:link {
        text-decoration: none;
    }
    .wrap {
        background: #1C5499;
    }
    .logo {
        float: left;
    }
`