import css from 'styled-jsx/css'
import grid from '~/styles/grid'
import colors from '~/styles/colors'

export default css`
    header {
        width: ${grid[12]};
        margin: 0 auto;
        padding: 0 0.65rem;
        background: ${colors.red.down};
        color: white;
        position: fixed;
        top: 0;
        z-index: 50;
        border-bottom: 4px solid ${colors.orange.down};
        border-top: 2px solid ${colors.orange.up};
    }
    a {
        color: ${colors.orange.o};
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