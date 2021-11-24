// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE;

  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

var maxProfitDP = function (prices) {
  let f = [];
  f[prices.length - 1] = -1 * prices[prices.length - 1];
  for (let i = 0; i < prices.length - 1; i++) {
    f[i] = -1 * prices[i] + Math.max(...prices.slice(i + 1, prices.length));
  }
  let maxProfit = Math.max(...f);
  return maxProfit > 0 ? maxProfit : 0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 1, 4]));
console.log(maxProfitDP([7, 1, 5, 3, 6, 4])); // DP method will exceed time limit
console.log(maxProfitDP([7, 6, 4, 3, 1]));
console.log(maxProfitDP([2, 1, 4]));
