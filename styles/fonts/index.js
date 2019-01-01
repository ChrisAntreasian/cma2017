import css, { global } from 'styled-jsx/css'
import colors from '~/styles/colors'

import diavloBlackWoff from './diavlo/diavlo_black_ii_37-webfont.woff'
import diavloBlackWoff2 from './diavlo/diavlo_black_ii_37-webfont.woff2'
import diavloBoldWoff from './diavlo/diavlo_bold_ii_37-webfont.woff'
import diavloBoldWoff2 from './diavlo/diavlo_bold_ii_37-webfont.woff2'
import diavloBookWoff from './diavlo/diavlo_book_ii_37-webfont.woff'
import diavloBookWoff2 from './diavlo/diavlo_book_ii_37-webfont.woff2'
import diavloLightWoff from './diavlo/diavlo_light_ii_37-webfont.woff'
import diavloLightWoff2 from './diavlo/diavlo_light_ii_37-webfont.woff2'
import diavloMediumWoff from './diavlo/diavlo_medium_ii_37-webfont.woff'
import diavloMediumWoff2 from './diavlo/diavlo_medium_ii_37-webfont.woff2'

import quattBoldWoff from './quattrocento-sans/quattrocentosans-bold-webfont.woff'
import quattBoldWoff2 from './quattrocento-sans/quattrocentosans-bold-webfont.woff2'
import quattItalicWoff from './quattrocento-sans/quattrocentosans-italic-webfont.woff'
import quattItalicWoff2 from './quattrocento-sans/quattrocentosans-italic-webfont.woff2'
import quattRegWoff from './quattrocento-sans/quattrocentosans-regular-webfont.woff'
import quattRegWoff2 from './quattrocento-sans/quattrocentosans-regular-webfont.woff2'

const fontFiles = {
    diavloBlackWoff,
    diavloBlackWoff2,
    diavloBoldWoff,
    diavloBoldWoff2,
    diavloBookWoff,
    diavloBookWoff2,
    diavloLightWoff,
    diavloLightWoff2,
    diavloMediumWoff,
    diavloMediumWoff2,
    
    quattBoldWoff,
    quattBoldWoff2,
    quattItalicWoff,
    quattItalicWoff2,
    quattRegWoff,
    quattRegWoff2
}

export default css.global`
    @font-face {
        font-family: 'quat-bold';
        src: url(${fontFiles.quattBoldWoff2}) format('woff2'),
             url(${fontFiles.quattBoldWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'quat-italic';
        src: url(${fontFiles.quattItalicWoff2}) format('woff2'),
             url(${fontFiles.quattItalicWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'quat';
        src: url(${fontFiles.quattRegWoff2}) format('woff2'),
             url(${fontFiles.quattRegWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'diavlo-bold';
        src: url(${fontFiles.diavloBoldWoff2}) format('woff2'),
             url(${fontFiles.diavloBoldWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'diavlo-light';
        src: url(${fontFiles.diavloLightWoff2}) format('woff2'),
             url(${fontFiles.diavloLightWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'diavlo-book';
        src: url(${fontFiles.diavloBookWoff2}) format('woff2'),
             url(${fontFiles.diavloBookWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'diavlo-black';
        src: url(${fontFiles.diavloBlackWoff2}) format('woff2'),
             url(${fontFiles.diavloBlackWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'diavlo-medium';
        src: url(${fontFiles.diavloMediumWoff2}) format('woff2'),
             url(${fontFiles.diavloMediumWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    a {
        color: ${colors.bWhite.up};
        font-family: 'quat-bold';
        text-decoration: none;
    }
    a:visited {
        color: ${colors.bWhite.up};
    }
    html {
        font-size: 16px;
    }
    body {
        font-family: 'quat';
        letter-spacing: 0.01em;
        font-size: 16px;
        line-height: 1.6rem;
        letter-spacing: 0.05em;
        color: ${colors.bBlack.o}
    }
    h1, h2, h3, h4, h5 {
        font-family: 'diavlo-bold';
        letter-spacing: 0.1em;
        line-height: 1.1em;
        margin: 0.65rem 0;
        font-weight: normal;
        color: ${colors.bBlack.o}
    }
    h1 {
        font-size: 32px;
    }
    h2 a, h3 a, h4 a, h5 a {
        color: ${colors.bWhite.up};
    }
`