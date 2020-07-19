import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.ul`
    list-style: none;
    width: 200px;
    position: absolute;
    top: 50px;
    right: 10px;
    z-index: 5;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${props => darken(0.05, props.theme.colors.primary)};
    background-color: ${props => darken(0.025, props.theme.colors.primary)};
`;

export const Item = styled.li`
    transition: .2s;
    width: 100%;
    height: 35px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;

    &:hover{
        transition: .2s;
        background-color: ${props => lighten(0.025, props.theme.colors.primary)};
    }

    & + li {
        margin-top: 10px;
    }
`;

export const OutsideArea = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
`;