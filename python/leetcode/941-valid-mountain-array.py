class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:

        if len(arr) < 3:
            return False

        peak = -math.inf
        seen = False

        for i in range(len(arr)-1):
            if not seen:
                if arr[i] > arr[i+1]:
                    seen, peak = True, arr[i]
                if arr[i] == arr[i+1]:
                    return False
            else:
                if arr[i] <= arr[i+1]:
                    return False

        return seen and arr[0] < peak and arr[len(arr)-1] < peak
