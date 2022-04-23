public class Solution
{
  public int[] SortArrayByParity(int[] nums)
  {
    int left = 0, right = nums.Length - 1;

    while (left < right)
    {
      if (nums[left] % 2 > nums[right] % 2)
      {
        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
      }

      if (nums[left] % 2 == 0) { left++; }
      if (nums[right] % 2 == 1) { right--; }


    }
    return nums;

  }
}