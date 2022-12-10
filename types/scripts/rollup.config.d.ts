declare const _default: ({
    input: string[];
    plugins: any[];
    output: {
        banner: string;
        dir: string;
        sourcemap: boolean;
        assetFileNames: string;
    };
} | {
    input: string[];
    external: string[];
    plugins: any[];
    output: {
        banner: string;
        dir: string;
        format: string;
        sourcemap: boolean;
        chunkFileNames: string;
    };
} | {
    input: string;
    external: string[];
    plugins: import(".pnpm/rollup@2.78.0/node_modules/rollup").Plugin[];
    output: {
        name: string;
        banner: string;
        format: string;
        exports: string;
        globals: {
            react: string;
            lodash: string;
        };
        sourcemap: boolean;
        file: string;
    };
} | {
    input: string;
    output: {
        file: string;
    };
    plugins: import(".pnpm/rollup@2.79.1/node_modules/rollup").Plugin[];
})[];
export default _default;
