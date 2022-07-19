"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
            // telling readFileSync what type of content to expect in football.csv
            // adding this will make it return a string
            encoding: 'utf-8'
        }).split('\n') // split on each new line
            // map over and on each row, 
            // split and 
            .map((row) => {
            return row.split(',');
        })
            // poor model
            .map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
