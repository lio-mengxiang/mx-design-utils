import React from 'react';
import Item from './item';
import { MenuProps } from './interface';
declare const MenuComponent: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<unknown>> & {
    Item: typeof Item;
    ItemGroup: any;
    SubMenu: any;
};
export default MenuComponent;
export { MenuProps, MenuSubMenuProps, MenuItemGroupProps, MenuItemProps } from './interface';
