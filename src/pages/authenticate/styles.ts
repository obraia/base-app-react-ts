import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media only screen and (max-width: 460px) {
        padding: 10px;
    }
`;
