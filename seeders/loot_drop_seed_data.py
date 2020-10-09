# Here we are looking to grab a randint between 1-327 inclusive and
# draw one loot item from the loot_list by id. Then we will use the name to
# create a new loot drop for each of our demo users
from random import randint
from faker import Faker
from app.models.loot_drops import Loot_Drop
from .loot_seed_data import loot_list

# Since we will have 20 seed users who are not seed users we will create them first.

# This is a helper function that will take in a seed users id and create loot drops for them
def rand_loot_drop(id):
    rand_idx = randint(0, len(loot_list))
    rand_lvl = randint(50,65)
    rand_item = loot_list[rand_idx]
    item_name = rand_item['name']
    rand_loot_drop = Loot_Drop(creator_id=id)
