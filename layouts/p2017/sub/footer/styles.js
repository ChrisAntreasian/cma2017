import css from 'styled-jsx/css'
import colors from '~/styles/colors'
export default css`
    div {
        padding: 1.3rem;
        background: ${colors.blue.o};
        box-shadow: inset 0 0 1.3rem ${colors.blue.down};
        color: ${colors.bWhite.up};
        border-top: 4px solid ${colors.orange.down};
        border-bottom: 6px solid ${colors.orange.up};
    }
    section {
        display: flex;
        justify-content: flex-end;   
        flex-direction: row;
        
    }
    a {
        padding-right: 1.3rem;
    }
    @media only screen and (max-width: 31em) {
        section {
            flex-direction: column;
            padding-bottom: 0.65rem;
        }
    }
`