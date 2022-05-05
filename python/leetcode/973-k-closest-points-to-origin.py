import heapq


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        distances = []

        for index, point in enumerate(points):
            x, y = point
            d = math.sqrt(x**2 + y**2)
            heapq.heappush(distances, (d, index))

        res = []
        for _ in range(k):
            _, index = heapq.heappop(distances)
            res.append(points[index])
        return res
