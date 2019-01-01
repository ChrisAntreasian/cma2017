import css from 'styled-jsx/css'
import grid from '~/styles/grid'
import colors from '~/styles/colors'
export default css`
    aside {
        padding: 0.65rem;
        width: ${grid[3]};
        position: absolute;
        right: 0;
        top: 0;
    }
    @media only screen and (max-width: 31em) {
        aside {
            width: ${grid[12]};
            position: initial;
            order: 2;
        }
    }
`
export const post = css`
    article {
        margin-top: 1.3rem;
        padding: 1.3rem;
        background: ${colors.blue.o};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        box-shadow:
            inset 0 0 0.325rem ${colors.blue.down},
            0 0 0.65rem ${colors.bBlack.down}
        ;
    }
    h5 {
        margin-bottom:0;
        color: ${colors.bWhite.up};
    }
    article:first-of-type {
        margin-top: 0;
    }
    img {
        width: ${grid[12]};
        margin-bottom: 0.65rem;
    }
`
