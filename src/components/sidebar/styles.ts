import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.aside`
    transition: flex .4s;
    display: flex;
    flex: 0 0 250px;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: ${props => props.theme.colors.primary};

    @media only screen and (max-width: 1000px){
        transition: flex .4s;
        flex-basis: 80px;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: row;
        order: 1; 
    }
`;

export const MenuList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;

    @media only screen and (max-width: 600px){
        flex-direction: row;
        justify-content: space-around
    }
`;

export const MenuItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
       
    a{
        transition: background .2s;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        border-radius: 5px;
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme.colors.textPrimary};
        cursor: pointer;
        
        &:hover{
            transition: background .2s;
            background-color: ${props => darken(0.025, props.theme.colors.primary)};
        }

        svg {
            min-width: 25px;
            min-height: 25px;
            margin: 0 20px;
        }

        @media only screen and (max-width: 600px) {
            margin-bottom: 0;
        }
    } 

    &.selected{       
        pointer-events: none;
        
        a{
            transition: .2s;
            background-color: ${props => lighten(0.1, props.theme.colors.primary)};
        }
    }
`;

export const MenuItemName = styled.span`
    @media only screen and (max-width: 1000px) {
        display: none;
    }  
`;