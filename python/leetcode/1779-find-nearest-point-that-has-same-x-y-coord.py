class Solution:
    def nearestValidPoint(self, x: int, y: int, points: List[List[int]]) -> int:
        min_d = math.inf
        min_i = -1

        for i in range(len(points)):
            px, py = points[i]
            if px == x or py == y:
                mht_d = abs(px-x) + abs(py-y)
                if mht_d < min_d:
                    min_i = i
                    min_d = mht_d
        return min_i
