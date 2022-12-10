import { EmptyProps } from '../../Empty/interface';
import { ReactNode } from 'react';
import { Locale } from '../../locale/interface';
import { IconProps } from 'components/src/Icon/interface';
export interface ConfigProviderProps {
    /**
     * @zh 设置语言包
     * @en Language package setting
     */
    locale?: Locale;
    /**
     * @zh 当按钮中是两个汉字时，自动在两个汉字中添加一个空格。
     * @en When there are two Chinese characters in the button, a space is automatically added between two Chinese characters.
     */
    autoInsertSpaceInButton?: boolean;
    componentConfig?: {
        Empty?: EmptyProps;
        Icon?: IconProps;
    };
    /**
     * @zh 设置语言包
     * @en Language package setting
     */
    /**
     * @zh 主题配置
     * @en Theme Configuration
     */
    /**
     * @zh 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
     * @en Configure the default size of the component, which will only take effect for components that support the `size` property.
     * @defaultValue default
     */
    size?: 'mini' | 'small' | 'default' | 'large';
    /**
     * @zh 全局组件类名前缀
     * @en Global ClassName prefix
     * @defaultValue arco
     */
    prefixCls?: string;
    getPrefixCls: (componentName: string, customPrefix?: string) => string;
    /**
     * @zh 全局弹出框挂载的父级节点。
     * @en The parent node of the global popup.
     * @defaultValue () => document.body
     */
    getPopupContainer?: (node: HTMLElement) => Element;
    /**
     * @zh 全局的加载中图标，作用于所有组件。
     * @en Global loading icon.
     */
    /**
     * @zh Table 全局的分页配置。
     * @en Table Global pagination configuration.
     * @version 2.6.0
     */
    /**
     * @zh 全局配置组件内的空组件。
     * @en Empty component in component.
     * @version 2.10.0
     */
    renderEmpty?: (componentName?: string) => ReactNode;
    /**
     * @zh 全局配置弹出框的 `focusLock`，作用于 `Modal` `Drawer` 组件。
     * @en global `focusLock`, affects component `Modal` `Drawer`.
     * @defaultValue { modal: { autoFocus: true }, drawer: { autoFocus: true }}
     * @version 2.13.0
     */
    focusLock?: {
        modal?: boolean | {
            autoFocus?: boolean;
        };
        drawer?: boolean | {
            autoFocus?: boolean;
        };
    };
    zIndex?: number;
    children?: ReactNode;
    /**
     * @zh 主题配置
     * @en Theme Configuration
     */
    theme?: ITheme;
}
type ITheme = {
    default: string;
    hover?: string;
    active?: string;
};
export {};
