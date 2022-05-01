import heapq
import math

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        if len(points) == 1:
            return points

        distances = []

        for idx, point in enumerate(points):
            x, y = point
            d = math.sqrt(x**2 + y**2)
            distances.append((d, idx))

        heapq.heapify(distances)
        k_dist = heapq.nsmallest(k, distances)
        res = []
        for kd in k_dist:
            res.append(points[kd[1]])
        return res
