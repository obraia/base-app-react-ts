import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 4fr 2fr 3fr 1fr;
    grid-template-areas: "a a"
                         "a a"
                         "c b"
                         "c d";
    grid-gap: 10px;
    padding: 10px;

    @media only screen and (max-width: 450px){
        grid-template-areas: "a a"
                             "b b"
                             "c c"
                             "d d";   
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

export const DivD = styled.div`
    grid-area: d;
`; 
