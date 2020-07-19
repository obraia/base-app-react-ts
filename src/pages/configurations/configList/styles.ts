import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow-y: auto;

    @media only screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const Item = styled.li`
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: ${props => props.theme.colors.background};
`;

export const ItemTitle = styled.span`
    color: ${props => props.theme.colors.textBackground};
`;