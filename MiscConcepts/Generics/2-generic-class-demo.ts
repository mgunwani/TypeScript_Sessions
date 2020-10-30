
class MyArray<T> {

    private arr: T[] = [];

    addItem(item: T) {
        this.arr.push(item);
    }

    getItems(): T[] {
        return this.arr;
    }

    removeItem(item: T) {
        let index = this.arr.indexOf(item);
        if (index > -1) {
            this.arr.splice(index, 1);
        }
    }

}

var numObj = new MyArray<number>();
numObj.addItem(10);


var strObj = new MyArray<string>();
strObj.addItem("Sumit");
