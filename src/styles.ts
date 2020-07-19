import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    & > div{
        height: 100%;
        min-height: 450px;
    }
`;
