import heapq


class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        rooms = []
        intervals.sort()

        heapq.heappush(rooms, intervals[0][1])

        for interval in intervals[1:]:
            if rooms[0] <= interval[0]:
                heapq.heappop(rooms)

            heapq.heappush(rooms, interval[1])

        return len(rooms)
