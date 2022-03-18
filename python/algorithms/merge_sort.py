def merge_sort(arr):
    if len(arr) < 2:
        return arr
    
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    left = merge_sort(left)
    right = merge_sort(right)

    return merge(left, right)

def merge(left, right):
    sorted_list = []
    len_left = len(left)
    len_right = len(right)
    i,j = 0,0

    while i < len_left and j < len_right:
        if left[i] <= right[j]:
            sorted_list.append(left[i])
            i += 1
        else:
            sorted_list.append(right[j])
            j += 1
    
    if i < len_left:
        for l in range(i, len_left):
            sorted_list.append(left[l])
    if j < len_right:
        for r in range(j, len_right):
            sorted_list.append(right[r])
    return sorted_list

if __name__ == "__main__":
    nums = [7, 2, 1, 6, 8, 5, 3, 4]
    nums = merge_sort(nums)
    print(nums)