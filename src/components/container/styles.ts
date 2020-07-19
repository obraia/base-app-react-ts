import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: min-content;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.primary};
    overflow-y: auto;

    & + div {
        margin-top: 10px;
    }
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: normal;
    color: ${props => props.theme.colors.textPrimary};
`;