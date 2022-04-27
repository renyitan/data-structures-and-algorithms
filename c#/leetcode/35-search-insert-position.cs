public class Solution
{
  public int SearchInsert(int[] nums, int target)
  {
    return Search(nums, target, 0, nums.Length - 1);
  }

  public int Search(int[] nums, int target, int start, int end)
  {
    if (start > end)
    {
      return start;
    }

    int mid = (start + end) / 2;
    if (nums[mid] == target)
    {
      return mid;
    }

    else if (target < nums[mid])
    {
      return Search(nums, target, 0, mid - 1);
    }
    else if (target > nums[mid])
    {
      return Search(nums, target, mid + 1, end);
    }
    return start;
  }
}