import threading


def print_cube(num):
    print("Cube: {}".format(num * num * num))


def print_square(num):
    """
    function to print square of given num
    """
    print("Square: {}".format(num * num))


if __name__ == "__main__":
    t1 = threading.Thread(target=print_cube, args=(10,))
    t2 = threading.Thread(target=print_square, args=(10,))

    t1.start()
    t2.start()

    # pause main program, wait until thread 1 is completely executed
    t1.join()
    # pause main program, wait until thread 2 is completely executed
    # t2.join()

    print('done')
