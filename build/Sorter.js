"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; i < length - i - 1; j++) {
                if (this.collection.compare(j)) {
                    this.collection.swap(j);
                }
            }
        }
    };
    return Sorter;
}());
