type ILevel = 'info' | 'warn' | 'success' | 'error';
declare function log(...args: any[]): void;
declare namespace log {
    var info: any;
    var warn: any;
    var error: any;
    var success: any;
    var chalk: import("chalk").ChalkInstance;
    var divider: (level?: ILevel) => void;
}
export default log;
