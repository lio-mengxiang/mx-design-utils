"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ora_1 = __importDefault(require("ora"));
const print_1 = __importDefault(require("./print"));
function withOra(promiseFn, { text, successText, failText, startText }) {
    return new Promise((resolve, reject) => {
        const spinner = (0, ora_1.default)(text).start();
        startText && print_1.default.info(startText);
        promiseFn()
            .then((result) => {
            spinner.succeed(`✅ ${successText}`);
            resolve(result);
        })
            .catch((err) => {
            spinner.fail(`❎ ${failText}`);
            reject(err);
        });
    });
}
exports.default = withOra;
