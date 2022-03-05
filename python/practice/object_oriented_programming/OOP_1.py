class Dog:
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} is {self.age} years old"

    def speak(self, sound):
        return f"{self.name} barks {sound}"


class JackRussellTerrir(Dog):

    def speak(self, sound="Arf"):
        return f"{self.name} says {sound}"


class Dachshud(Dog):
    pass


class Bulldog(Dog):
    def speak(self, sound="Grrr"):
        return super().speak(sound)


terrier = JackRussellTerrir('terrieriser', 18)
bulldog = Bulldog('bulldog', 20)
print(terrier.speak())
print(bulldog.speak())
