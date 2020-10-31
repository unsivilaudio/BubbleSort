"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var x = 0; x < length; x++) {
            for (var y = 0; y < length - x - 1; y++) {
                if (this.compare(y, y + 1)) {
                    this.swap(y, y + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.default = Sorter;
