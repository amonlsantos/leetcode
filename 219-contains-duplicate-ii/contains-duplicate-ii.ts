function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const mapElementFindIndex: Map<number, number> = new Map();
    let distance = 0;
    for (let i = 0; i < nums.length; i++) {
        if (mapElementFindIndex.get(nums[i]) == null) {
            mapElementFindIndex.set(nums[i], i);
        } else {
            distance = i - mapElementFindIndex.get(nums[i]);
            mapElementFindIndex.set(nums[i], i);
        }

        if (distance > 0 && distance <= k ) {
            return true;
        }
    }

    return false;

};