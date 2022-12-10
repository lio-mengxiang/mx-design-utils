import React, { HTMLAttributes } from 'react';
export default interface BasePropsType {
    prefixCls?: string;
    type?: string;
    theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    viewBox?: string;
}
export type IconProps = BasePropsType & HTMLAttributes<HTMLElement>;
