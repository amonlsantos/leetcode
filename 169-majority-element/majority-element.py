class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        counterNums = Counter(nums)

        return counterNums.most_common(1)[0][0]