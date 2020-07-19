import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 4fr 2fr 3fr 1fr;
    grid-template-areas: "a b"
                         "a b"
                         "a b"
                         "a c";
    grid-gap: 10px;
    padding: 10px;

    @media only screen and (max-width: 700px){
        grid-template-areas: "a a"
                             "b b"
                             "b b"
                             "c c";   
    }
`;

export const DivA = styled.div`
    grid-area: a;
`; 

export const DivB = styled.div`
    grid-area: b;
`;

export const DivC = styled.div`
    grid-area: c;
`; 
