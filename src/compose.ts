/**
 * 异步函数组合，是否调用下一个函数，完全由中间件自己决定
 * @param middleware 中间件
 */

type IMiddleware = {
  name: string;
  fn: ({ middlewareData, next }: { middlewareData: Record<string, any>; next: () => void }) => Promise<{ data: Record<string, any> }>;
};

export function compose(middleware: IMiddleware[]) {
  let middlewareData: Record<string, any> = {};
  async function dispatch(index: number) {
    if (index === middleware.length) return;
    const { name, fn } = middleware[index];
    const { data } = await fn({
      middlewareData,
      next: () => {
        dispatch(++index);
      },
    });
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data,
      },
    };
  }
  dispatch(0);
}
