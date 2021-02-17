import json
f = open("loot.txt", "r")
lootData = f.read()
lootList = json.loads(lootData)
# print(lootList[0])
