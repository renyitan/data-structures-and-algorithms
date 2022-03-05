class BankAccount:

    id = 1

    def __init__(self):
        self.balance = 0
        self.id = BankAccount.id
        BankAccount.id += 1

    def __str__(self):
        return f"bank account: {self.id}, balance: {self.balance}"

    def withdraw(self, amount):
        self.balance -= amount
        return self.balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance


a = BankAccount()
b = BankAccount()
c = BankAccount()
a.deposit(500)
c.deposit(1000)
print(a)
print(b)
print(c)
