import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1 from 'react';

type Childprops = {
    children: React$1.ReactNode;
};
declare const Container: ({ children }: Childprops) => react_jsx_runtime.JSX.Element;

type OverlayModalType = {
    closeModal: () => void;
    children: React.ReactNode;
    showModal: boolean;
};
declare const ModalCenter: ({ closeModal, children, showModal }: OverlayModalType) => react_jsx_runtime.JSX.Element;

declare const lightMode: {
    color: {
        palette: {
            white: string;
            black: string;
            slate: {
                50: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
                950: string;
            };
            gray: {
                50: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
                950: string;
            };
        };
        background: {
            default: string;
            level1: string;
            level2: string;
            hover1: string;
            hover2: string;
        };
        border: {
            default: string;
            level1: string;
        };
        text: {
            default: string;
            header: string;
            content: string;
            label: string;
            label1: string;
            label2: string;
        };
    };
};
declare const darkMode: {
    color: {
        palette: {
            white: string;
            black: string;
            slate: {
                50: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
                950: string;
            };
            gray: {
                50: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
                950: string;
            };
        };
        background: {
            default: string;
            level1: string;
            level2: string;
            hover1: string;
            hover2: string;
        };
        border: {
            default: string;
            level1: string;
        };
        text: {
            default: string;
            header: string;
            content: string;
            label: string;
            label1: string;
            label2: string;
        };
    };
};
type ThemeType = typeof lightMode;

export { Container, ModalCenter, type ThemeType, darkMode, lightMode };
