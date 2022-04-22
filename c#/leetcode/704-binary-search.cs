public class Solution
{
  public int Search(int[] nums, int target)
  {
    return binarySearch(nums, 0, nums.Length - 1, target);
  }

  public int binarySearch(int[] nums, int start, int end, int target)
  {
    if (start > end)
    {
      return -1;
    }

    int mid = (start + end) / 2;

    if (nums[mid] == target)
    {
      return mid;
    }

    if (target < nums[mid])
    {
      return binarySearch(nums, start, mid - 1, target);
    }
    else
    {
      return binarySearch(nums, mid + 1, end, target);
    }


  }
}