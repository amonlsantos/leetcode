function removeDuplicates(nums: number[]): number {
    const counter: Map<number, number> = new Map();
    let k = 0;

    for (const num of nums) {
        let counterValue = counter.get(num) || 0;
        counter.set(num, counterValue + 1)

        if (counter.get(num) <= 2) {
            nums[k] = num;
            k++;
        }
    }

    return k;
};