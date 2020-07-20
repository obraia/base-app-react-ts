import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.nav`
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 15px;
`;

export const PageTitle = styled.h1`
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.textBackground};
`;

export const ButtonMenu = styled.span`
    transition: .2s;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 5px;
    font-size: 14px;
    color: ${props => props.theme.colors.textBackground};
    cursor: pointer;

    &:hover{
        transition: .2s;
        background-color: ${props => darken(0.05, props.theme.colors.background)};
    }
`;