using System;

public class Program
{
  public static void Main()
  {
    int[] nums = new int[] { 4, 5, 6, 7, 0, 1, 2 };
    Console.Write(Search(nums, 0));

  }

  public static int Search(int[] nums, int target)
  {
    int left = 0, right = nums.Length - 1;

    while (left <= right)
    {
      int mid = (int)left + (right - left) / 2;
      if (nums[mid] == target)
      {
        return mid;
      }

      if (nums[left] <= nums[mid])
      {
        if (target < nums[left] || target > nums[mid])
        {
          left = mid + 1;
        }
        else
        {
          right = mid - 1;
        }
      }
      else
      {
        if (target < nums[mid] || target > nums[right])
        {
          right = mid + 1;
        }
        else
        {
          left = mid - 1;
        }
      }
    }
    return -1;
  }
}