def twoSums(nums, target):
    hash = {}
    for i in range(len(nums)):
        if (target - nums[i]) in hash:
            return i, hash[target-nums[i]]
        hash[nums[i]] = i


print(twoSums([2, 7, 11, 15], 9))
