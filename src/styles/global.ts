import styled, { createGlobalStyle } from 'styled-components';
import { lighten, shade } from "polished";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${props => props.theme.colors.background};
    }
`;