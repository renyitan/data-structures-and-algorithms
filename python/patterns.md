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

### 2. Backtracking

Backtracking Template

- Get initial state
- Check if state is valid
- Get list of valid potential next steps
- Try each potential step, depth first
- Backtrack one step when there are no potential next steps
  -- Could be from reaching a valid state or from choosing an invalid step

```py
  def permute(self, nums: List[int]) -> List[List[int]]:
        res = []

        def dfs(temp, elements):
            if len(elements) == 0:
                res.append(temp.copy())

            for i in range(len(elements)):
                temp.append(elements[i])
                new_elements = elements.copy()
                new_elements.remove(elements[i])
                dfs(temp, new_elements)
                temp.pop()

        dfs([], nums)
        return res
```
