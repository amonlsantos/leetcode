class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        expectedNums = []
        k = 0
        for index,num in enumerate(nums):
            if num != val:
                nums[k] = nums[index]
                k += 1

        # numberOfElementesToRemove = len(nums) - counter
        # expectedNums.extend(["_" for x in range(numberOfElementesToRemove)])
        # print(counter)
        return k