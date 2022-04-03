class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        max_wealth = 0

        for i in range(len(accounts)):
            wealth = 0
            for j in range(len(accounts[i])):
                wealth += accounts[i][j]
                max_wealth = max(wealth, max_wealth)

        return max_wealth
