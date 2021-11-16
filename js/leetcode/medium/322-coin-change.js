// https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let a = Array.from({ length: amount + 1 }, () => Number.MAX_SAFE_INTEGER);
  a[0] = 0;

  for (let i = 1; i < amount +1; i++) {
    coins.forEach((coin) => {
      if (amount - coin >= 0) {
        a[i] = Math.min(a[i], 1 + a[amount - coin]);
      }
    });
  }

  console.log(a[1]);
};

console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));
