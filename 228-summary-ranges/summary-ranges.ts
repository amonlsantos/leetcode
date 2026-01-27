function summaryRanges(nums: number[]): string[] {
    const map = new Map<number, number>();

    for (const num of nums) {
        if (map.has(num - 1)) {
            const start = map.get(num - 1)!;
            map.delete(num - 1);
            map.set(num, start);
        } else {
            map.set(num, num);
        }
    }

    const summaryRanges: string[] = [];

    for (const [end, start] of map) {
        if (start === end) {
            summaryRanges.push(`${start}`);
        } else {
            summaryRanges.push(`${start}->${end}`);
        }
    }

    return summaryRanges;
}
