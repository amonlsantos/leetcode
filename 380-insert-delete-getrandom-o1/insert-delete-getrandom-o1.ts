class RandomizedSet {
    private map = new Map<number, number>();
    private array: Array<number> = [];
    private counter = 0;
    constructor() {
    }

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false;
        }

        this.map.set(val, this.array.length);
        this.array.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) {
            return false;
        }

        const indexToRemove = this.map.get(val)!;
        const lastVal = this.array[this.array.length - 1];

        this.array[indexToRemove] = lastVal;
        this.map.set(lastVal, indexToRemove);

        this.array.pop();
        this.map.delete(val);

        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor((Math.random() * this.array.length));
        return this.array[randomIndex];
    }
}