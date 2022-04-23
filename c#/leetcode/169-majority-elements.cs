public class Solution
{
  public int MajorityElement(int[] nums)
  {
    int n = nums.Length;
    int majorityFreq = n / 2;

    var dict = new Dictionary<int, int>();

    foreach (int num in nums)
    {
      if (!dict.ContainsKey(num))
      {
        dict.Add(num, 1);
      }
      else
      {
        dict[num]++;
      }
    }

    int[] res = dict.Where(x => x.Value > majorityFreq).Select(x => x.Key).ToArray();
    return res[0];
  }
}