import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            background: string;
            textPrimary: string;
            textSecondary: string;
            textBackground: string;
            color1: string;
            color2: string;
            color3: string;
            color4: string;
            color5: string;
        }
    }
}