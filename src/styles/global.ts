import styled, { createGlobalStyle } from 'styled-components';
import { lighten, shade } from "polished";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Poppins, sans-serif;
    }

    body{
        background-color: ${props => props.theme.colors.background};
    }

    #root{
        height: 100vh;
        display: flex;

        @media only screen and (max-width: 600px){
            flex-direction: column;
        }
    }

    button{
        border: none;
        cursor: pointer;
    }

    input{
        border: none;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        display: block;
            
        }
        ::-webkit-scrollbar-track {
            background: ${props => props.theme.colors.background};
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: ${props => props.theme.colors.primary};
            cursor: pointer;
    }
`;