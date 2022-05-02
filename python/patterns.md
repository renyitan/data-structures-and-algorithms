## 1. Sliding Window


**3 Key Steps**
- Expand the window
- Meet the condition (stopping function) and process the window
- Contract the window

**Structure**
```py
def sliding_window(nums):
  longest = 0
  left = 0
  seen = set()

  for right in range(len(nums)):
    # contract the window if condition fails
    while nums[right] in seen:
      seen.remove(nums[left])
      left+=1

    # expand the window
    seen.add(nums[right])
```

