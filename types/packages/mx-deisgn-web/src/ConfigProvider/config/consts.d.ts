import { ConfigProviderProps } from '../interface';
export declare const defaultProps: ConfigProviderProps;
export declare const colorList: {
    primaryColor: {
        default: string;
        hover: string;
        active: string;
    };
    successColor: {
        default: string;
        hover: string;
        active: string;
    };
    infoColor: {
        default: string;
        hover: string;
        active: string;
    };
    warningColor: {
        default: string;
        hover: string;
        active: string;
    };
    dangerColor: {
        default: string;
        hover: string;
        active: string;
    };
};
export declare function setTheme(theme: ConfigProviderProps['theme']): void;
