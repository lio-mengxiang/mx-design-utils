type ClassNamesArg = string | string[] | {
    [key: string]: any;
} | undefined | null | boolean;
/**
 * 代替classnames库,样式合并的方法
 */
export default function cs(...args: ClassNamesArg[]): string;
export {};
