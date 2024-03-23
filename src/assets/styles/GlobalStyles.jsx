import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    --color-text: #101828;
    --color-main: #475467;
    --color-button: #E44848;
    --color-button-hover: #D84343;
    --color-rating: #FFC531;
    --color-block: #F2F4F7;
    --color-inputs: #F7F7F7;
    --color-background: #FFFFFF;
    --color-scroll: #d9d9d9;
}

body {
    font-family: 'Inter', 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.005em;
    color: var(--color-text);
    background-color: var(--color-background);
    overflow-x: hidden;
    margin: 0;
}



h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

ul,
ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

a {
    color: currentColor;
    text-decoration: none;
}

img {
    display: block;
    height: auto;
    border: none;
    max-width: 100%;
}

button {
    font-family: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding:0
}

*, 
*::before, 
*::after {
    box-sizing:border-box;
}


input {
    font-family: inherit;

    &:focus {
    outline: none;
    }
}`;

export default GlobalStyles;
