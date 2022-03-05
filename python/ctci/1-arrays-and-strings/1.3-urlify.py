def urlify(str):
    url = str.replace(' ', '%20')
    return url


print(urlify('Mr John Smith'))
