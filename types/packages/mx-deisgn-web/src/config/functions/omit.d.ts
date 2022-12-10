export default function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: Array<K | string>): Omit<T, K>;
