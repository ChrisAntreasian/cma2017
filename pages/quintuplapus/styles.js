import css from 'styled-jsx/css'
import bgTransparency from '~/layouts/p2017/img/transparent.png'

export default css`
    :global(.quint-book) {
        margin: 0 auto;
    }
    .container {
        background-image: url("${bgTransparency}");
        padding: 20px;

    }
`