public class Solution
{
  public int Search(int[] nums, int target)
  {
    int left = 0, right = nums.Length - 1;

    while (left <= right)
    {
      int mid = (int)left + (right - left) / 2;
      if (target == nums[mid])
      {
        return mid;
      }
      else if (target > nums[mid])
      {
        left = mid + 1;
      }
      else
      {
        right = mid - 1;
      }
    }
    return -1;
  }
}