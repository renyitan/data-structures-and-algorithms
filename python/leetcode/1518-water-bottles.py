class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:

        count, emptyBottles = 0, 0

        while numBottles:
            count += numBottles
            emptyBottles += numBottles

            numBottles = emptyBottles // numExchange
            emptyBottles -= (numBottles * numExchange)

        return count
