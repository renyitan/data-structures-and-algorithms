import heapq

import heapq
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        if len(stones) == 1:
            return stones[0]

        stones = [s * -1 for s in stones]

        heapq.heapify(stones)

        while len(stones) >= 2:
            y = heapq.heappop(stones) * -1
            x = heapq.heappop(stones) * -1
            if x != y:
                heapq.heappush(stones, (y-x)*-1)
            print(stones)

        return stones[0] * -1 if len(stones) > 0 else 0
