public class Solution
{
  public void MoveZeroes(int[] nums)
  {
    int lastZero = 0;

    for (int i = 0; i < nums.Length; i++)
    {
      if (nums[i] != 0)
      {
        if (i > lastZero)
        {
          int temp = nums[i];
          nums[i] = nums[lastZero];
          nums[lastZero] = temp;
        }
        lastZero++;
      }
    }
  }
}