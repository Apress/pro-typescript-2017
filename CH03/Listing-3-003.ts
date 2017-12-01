class OrderedArray<T> {
    private items: T[] = [];

    constructor(private comparer?: (a: T, b: T) => number) {
    }

    add(item: T): void {
        this.items.push(item);
        this.items.sort(this.comparer);
    }

    getItem(index: number): T {
        if (this.items.length > index) {
            return this.items[index];
        }
        return null;
    }
}

var orderedArray: OrderedArray<number> = new OrderedArray<number>();

orderedArray.add(5);
orderedArray.add(1);
orderedArray.add(3);

var firstItem: number = orderedArray.getItem(0);

alert(firstItem); // 1
