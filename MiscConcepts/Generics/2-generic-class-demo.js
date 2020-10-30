var MyArray = /** @class */ (function () {
    function MyArray() {
        this.arr = [];
    }
    MyArray.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    MyArray.prototype.getItems = function () {
        return this.arr;
    };
    MyArray.prototype.removeItem = function (item) {
        var index = this.arr.indexOf(item);
        if (index > -1) {
            this.arr.splice(index, 1);
        }
    };
    return MyArray;
}());
var numObj = new MyArray();
numObj.addItem(10);
var strObj = new MyArray();
strObj.addItem("Sumit");
