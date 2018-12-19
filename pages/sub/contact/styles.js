import css from 'styled-jsx/css'
import grid from '~/styles/grid'

export default css`
    form {
        display: flex;
        flex-direction: column;
    }

    input,
    textarea {
        width: ${grid[8]};
        margin-bottom: 1.3rem;
        padding: 0.65rem;
    }
    button {
        width: 10rem;
        padding: 0.65rem;

    }
`
