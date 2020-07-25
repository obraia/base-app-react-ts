import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.form`
    transition: .4s;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.primary};
    overflow-y: auto;  

    @media only screen and (max-width: 460px) {
        transition: .4s;
        width: 100%;
    }
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.textPrimary};
    margin-bottom: 20px;
`;

export const Group = styled.span`
    width: 100%;
    display: flex;
    align-items: baseline;
    margin-top: 10px;

    @media only screen and (max-width: 460px) {
        flex-direction: column;
    }
`;

export const InputGroup = styled.span`
    width: 100%;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 460px) {
        margin-bottom: 10px;
    }
`;

export const Label = styled.label`
    font-size: 12px;
    color: ${props => props.theme.colors.textPrimary};
    cursor: pointer;
`;

export const Checkbox = styled.input`
    margin-right: 10px;
`;

export const Input = styled.input`
    width: 100%;
    height: 45px;
    padding: 0 10px;
    border-radius: 5px;
    font-size: 18px;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textPrimary};
    margin-bottom: 10px;
`; 

export const Button = styled.button`
    transition: .4s;
    width: 60%;
    height: 45px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textPrimary};

    @media only screen and (max-width: 460px) {
        width: 100%;
    }

    &:hover {
        background-color: ${props => darken(0.025, props.theme.colors.background)};
    }
`;