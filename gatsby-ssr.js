import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Theme from './src/themes/theme';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding:0;
}
body, html {
    height: 100%;
    background-color: red;
}
`

export const wrapRootElement = ({ element }) => {
    return <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
}