"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
var StringCollection = /** @class */ (function () {
    function StringCollection(data) {
        this.data = data;
        this.dataArray = this.data.split('');
    }
    Object.defineProperty(StringCollection.prototype, "length", {
        get: function () {
            return this.dataArray.length;
        },
        enumerable: false,
        configurable: true
    });
    StringCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.dataArray[leftIndex].toLowerCase() >
            this.dataArray[rightIndex].toLowerCase());
    };
    StringCollection.prototype.swap = function (leftIndex, rightIndex) {
        var lefItem = this.dataArray[leftIndex];
        this.dataArray[leftIndex] = this.dataArray[rightIndex];
        this.dataArray[rightIndex] = lefItem;
        this.data = this.dataArray.join('');
    };
    return StringCollection;
}());
exports.StringCollection = StringCollection;
