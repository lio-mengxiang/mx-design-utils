import { HotkeyInfo } from './context';
import { MenuInfo } from './util';
import { MenuProps } from './interface';
export declare const useHotkeyListener: ({ menuInfoMap, openKeys, selectedKeys, needPause, }: {
    menuInfoMap: {
        [key: string]: MenuInfo;
    };
    needPause?: () => boolean;
} & Pick<MenuProps, "selectedKeys" | "openKeys">) => {
    clear: () => void;
    hotkeyInfo: HotkeyInfo;
    listener: (event: any) => void;
};
export declare const useHotkeyHandler: (key: string, handler: (isActive: boolean, type: HotkeyInfo['type']) => void) => boolean;
