class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        if len(position) == 1 or len(speed) == 1:
            return 1

        fleet = 0
        cars = [(pos, v) for pos, v in zip(position, speed)]
        cars.sort()
        print(cars)

        stack = []
        for p, v in cars[::-1]:
            stack.append((target-p)/v)
            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()

        return len(stack)
