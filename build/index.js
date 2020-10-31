"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = __importDefault(require("./Sorter"));
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var nums = new NumbersCollection_1.default([10, 3, -5, 0, 8, 2, 5]);
var sorter = new Sorter_1.default(nums);
sorter.sort();
console.log(nums.data);
var letters = new CharactersCollection_1.default('rgecaPrQbc');
var wordSorter = new Sorter_1.default(letters);
wordSorter.sort();
console.log(letters.data);
