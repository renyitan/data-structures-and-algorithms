class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:

        pre_map = {i: [] for i in range(numCourses)}

        for course, prereq in prerequisites:
            pre_map[course].append(prereq)

        visited = set()

        def dfs(course):
            if course in visited:
                return False
            if pre_map[course] == []:
                return True

            visited.add(course)
            for p in pre_map[course]:
                if not dfs(p):
                    return False
            visited.remove(course)
            pre_map[course] = []
            return True

        for course in range(numCourses):
            if not dfs(course):
                return False
        return True
