/// <reference types="react" />
import { MenuProps } from './interface';
export type HotkeyInfo = {
    update: boolean;
    activeKeyPath: string[];
    type: 'sibling' | 'generation' | 'enter';
};
export type ClearHotkeyInfo = () => void;
declare const MenuContext: import("react").Context<Pick<MenuProps, "mode" | "collapse" | "theme" | "levelIndent" | "selectedKeys" | "openKeys" | "icons" | "triggerProps" | "tooltipProps" | "autoScrollIntoView" | "scrollConfig"> & {
    prefixCls?: string;
    hotkeyInfo?: HotkeyInfo;
    clearHotkeyInfo?: ClearHotkeyInfo;
    onClickMenuItem?: (key: string, event: any) => void;
    onClickSubMenu?: (key: string, level: number, type: 'pop' | 'inline') => void;
    collectInlineMenuKeys?: (key: string, unmount?: boolean) => void;
}>;
export default MenuContext;
