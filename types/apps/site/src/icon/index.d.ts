import React, { HTMLAttributes } from 'react';
import BasePropsType from './interface';
import createFromIconfont from './IconFont';
export type IconProps = {
    prefixCls?: string;
} & BasePropsType & HTMLAttributes<HTMLElement>;
interface CompoundedComponent extends React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLElement>> {
    createFromIconfont: typeof createFromIconfont;
}
declare const Icon: CompoundedComponent;
export default Icon;
