def quick_sort(arr, start, end):

    if len(arr) == 1:
        return arr

    if start < end:
        p_index = partition(arr, start, end)

        quick_sort(arr, start, p_index-1)
        quick_sort(arr, p_index+1, end)


def partition(arr, start, end):
    p_index = start
    pivot = arr[end]

    for i in range(start, end+1):
        if arr[i] < pivot:
            arr[i], arr[p_index] = arr[p_index], arr[i]
            p_index += 1

    arr[p_index], arr[end] = arr[end], arr[p_index]
    return p_index


if __name__ == "__main__":
    nums = [7, 2, 1, 6, 8, 5, 3, 4]
    quick_sort(nums, 0, len(nums)-1)
    print(nums)
