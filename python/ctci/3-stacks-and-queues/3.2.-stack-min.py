

class Stack:
    def __init__(self):
        self.items = []

    def push(self, value):
        self.items.append(value)

    def pop(self):
        return self.items.pop()

    def peek(self):
        if self.items:
            return self.items[-1]
        return None

    def is_empty(self):
        return len(self.items) == 0


class MinStack(Stack):
    def __init__(self):
        super().__init__()
        self.minvals = Stack()

    def push(self, value):
        super().push(value)
        if self.minvals.is_empty():
            self.minvals.push(value)
        elif value <= self.minimum():
            self.minvals.push(value)

    def pop(self):
        value = super().pop()
        if value == self.minimum():
            self.minvals.pop()

        return value

    def minimum(self):
        return self.minvals.peek()


if __name__ == "__main__":
    min_stack = MinStack()
    min_stack.push(5)
    min_stack.push(4)
    min_stack.push(3)
    min_stack.pop()
    print(min_stack.minimum())

    # print(s.min())
