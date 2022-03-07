def running_sum(nums):
    if len(nums) == 1:
        return nums
    sum_list = []

    for index, value in enumerate(nums):
        if index == 0:
            sum_list.append(value)
        else:
            sum_list.append(value + sum_list[index-1])    
    print(sum_list)   


print(running_sum([1, 2, 3, 4, 5]))
