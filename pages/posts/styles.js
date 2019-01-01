import css from 'styled-jsx/css'
import grid from '~/styles/grid'
import colors from '~/styles/colors'

export default css`
    .posts {
        width: ${grid[9]};
        padding: 0.65rem;
    }
    @media only screen and (max-width: 31em) {
        .posts {
            width: ${grid[12]};
        }
    }
`

export const post = css`
    article {
        width: ${grid[12]};
        margin-top: 1.3rem;
    }
    article:first-of-type {
        margin-top: 0;
    }
    article h3 {
        margin-top: 0;
    }
`