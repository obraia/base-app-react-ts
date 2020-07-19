import React from 'react';
import Switch from "react-switch";

import { useThemeConfig } from '../../../context/theme';

import { Container, Item, ItemTitle } from './styles';

const ConfigList = () => {

    const { toggleTheme = () => { }, theme } = useThemeConfig();

    const configs = [
        {
            title: 'Tema escuro',
            handdleFunction: toggleTheme,
        }
    ];

    return (
        <Container>
            {configs.map(config => (
                <Item key={config.title}>
                    <ItemTitle>{config.title}</ItemTitle>
                    <Switch
                        onChange={config.handdleFunction}
                        checked={theme.title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={20}
                        width={40}
                        handleDiameter={15}
                        offColor={theme.colors.primary}
                        onColor={theme.colors.primary}
                        onHandleColor={theme.colors.background}
                        offHandleColor={theme.colors.background} />
                </Item>
            ))}
        </Container>
    );
}

export default ConfigList;