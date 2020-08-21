import { createGlobalStyle } from 'styled-components';

import openSansLatinRegualar from './fonttypes/open-sans-v17-latin-ext_latin-regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'OpenSansRegular';
        src: local('OpenSansRegular'), local('OpenSansRegular'),
        url(${openSansLatinRegualar}) format('ttf'),
        font-weight: 600;
        font-style: oblique;
    }
`;