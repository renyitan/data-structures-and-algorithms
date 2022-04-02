
class Solution:
    def average(self, salary: List[int]) -> float:
        max_sal, min_sal = max(salary), min(salary)
        total, count = 0,len(salary) -2
        for sal in salary:
            if sal == max_sal or sal == min_sal:
                continue
            else:
                total += sal
        
        return total/count