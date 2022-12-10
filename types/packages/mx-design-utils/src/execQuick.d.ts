/**
 * spawn优于exec的点
 * 1是在于不用新建shell，减少性能开销
 * 2是没有maxbuffer的限制
 */
export default function execQuick(command: string, options?: {
    cwd?: string;
    time?: boolean;
    silent?: boolean;
}): Promise<{
    pid: number;
    code: number;
    stdout: string;
    stderr: string;
}>;
