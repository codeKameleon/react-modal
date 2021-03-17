import {createGlobalStyle} from 'styled-components'

import RubikLight from './rubik_light.woff'
import RubikLight2 from './rubik_light.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Rubik Light';
        src: local('Rubik Light'), local('RubikLight'),
        url(${RubikLight2}) format('woff2'),
        url(${RubikLight}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`