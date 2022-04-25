public class Solution
{
  public void SortColors(int[] nums)
  {
    quickSort(nums, 0, nums.Length - 1);
  }

  public void quickSort(int[] nums, int start, int end)
  {
    if (start >= end)
    {
      return;
    }
    else
    {
      int pIndex = partition(nums, start, end);
      quickSort(nums, start, pIndex - 1);
      quickSort(nums, pIndex + 1, end);
    }
  }

  public int partition(int[] nums, int start, int end)
  {
    int pIndex = start;
    int pivot = nums[end];

    for (int i = start; i <= end; i++)
    {
      if (nums[i] < pivot)
      {
        int temp = nums[i];
        nums[i] = nums[pIndex];
        nums[pIndex] = temp;
        pIndex++;
      }
    }

    int t = nums[pIndex];
    nums[pIndex] = nums[end];
    nums[end] = t;

    return pIndex;
  }

}