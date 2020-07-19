import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
    transition: .2s;
    min-width: 200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textBackground};

    & + div{
        margin-left: 10px;
    }
`;
