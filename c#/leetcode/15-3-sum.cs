public class Solution
{
  public IList<IList<int>> ThreeSum(int[] nums)
  {
    Array.Sort(nums);
    List<IList<int>> res = new List<IList<int>>();

    for (int i = 0; i < nums.Length; i++)
    {
      if (nums[i] > 0)
      {
        break;
      }

      if (i == 0 || nums[i] != nums[i - 1])
      {
        twoSums(nums, i, res);
      }
    }

    return res;
  }

  public void twoSums(int[] nums, int i, List<IList<int>> res)
  {
    int left = i + 1;
    int right = nums.Length - 1;

    while (left < right)
    {
      if (nums[left] + nums[right] + nums[i] == 0)
      {
        res.Add(new int[] { nums[left], nums[right], nums[i] });
        left++;
        right--;
        while (left < right && nums[left] == nums[left - 1])
        {
          left++;
        }
      }
      else if (nums[left] + nums[right] + nums[i] > 0)
      {
        right--;
      }
      else
      {
        left++;
      }
    }


  }
}