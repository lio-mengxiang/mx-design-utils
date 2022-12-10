/**
 * 异步函数组合，是否调用下一个函数，完全由中间件自己决定
 * @param middleware 中间件
 */
type IMiddleware = {
    name: string;
    fn: ({ middlewareData, next }: {
        middlewareData: Record<string, any>;
        next: () => void;
    }) => Promise<{
        data: Record<string, any>;
    }>;
};
export default function compose(middleware: IMiddleware[]): void;
export {};
