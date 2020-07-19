import styled from 'styled-components';
import { darken, lighten } from 'polished';
import ScrollContainer from 'react-indiana-drag-scroll'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 4fr 2fr 2fr;
    grid-template-areas: "a b"
                         "c b"
                         "c d"
                         "e d";
    grid-gap: 10px;
    padding: 10px;

    @media only screen and (max-width: 800px){
        grid-template-areas: "a a"
                             "b d"
                             "c c"
                             "e e";   
    }

    @media only screen and (max-width: 450px){
        grid-template-areas: "a a"
                             "b b"
                             "d d"
                             "c c"
                             "e e";   
    }
`;

export const DivA = styled.div`
    transition: .2s;
    grid-area: a;
    display: flex;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }
    
    &:hover{
         @media only screen and (min-width: 600px) {
            padding-bottom: 5px;

            ::-webkit-scrollbar {
                display: block;   
            }
        }
    }
`; 

export const DivB = styled.div`
    grid-area: b;
`;

export const DivC = styled.div`
    grid-area: c;
`; 

export const DivD = styled.div`
    grid-area: d;
`; 

export const DivE = styled.div`
    grid-area: e;
`; 
