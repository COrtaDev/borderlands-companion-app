from random import randint
from faker import Faker
from app.models.loot_drops import Loot_Drop
# Here we are looking to grab a randint between 1-327 inclusive and
# draw one loot item from the loot_list by id. Then we will use the name to
# create a new loot drop for each of our demo users
# from .loot_seed_data import loot_list... in fact I may not need loot list at all!

# Since we will have 20 seed users who are not seed users we will create them first.

# This is a helper function that will take in a seed users id and create loot drops for them


def rand_loot_drop(id):
    rand_loot_id = randint(1, 327)
    rand_lvl = randint(50, 65)
    # rand_item = loot_list[rand_idx] # I don't think we need this either
    # item_name = rand_item['name'] # I don't think I need the name actually
    rand_loot_drop = Loot_Drop(creator_id=id)


loot_lines = [
    zane_loot_lines +
    salvador_loot_lines +
    krieg_loot_lines +
    maya_loot_lines +
    axton_loot_lines +
    gaige_loot_lines +
    zero_loot_lines +
    roland_loot_lines +
    lilith_loot_lines +
    mordecai_loot_lines +
    brick_loot_lines
]

zane_loot_lines = [
    "Look at the shinies!",
    "Let's go for that one!",
    "Ya see that there?",
    "Lookit, that one there.",
    "Loot spotted!",
    "Let's do some lootin'!",
    "Loot's waitin' for us!",
    "Oooooh, looooot!",
    "Hoo boy! Loot!",
]
salvador_loot_lines = [
    "Oohoohoo! New toy!",
    "I like it! I want it!",
    "Eh, I've seen better.",
    "Want.",
    "Phat loot.",
]
krieg_loot_lines = [
    "I like my treasure like I like my baby steaks, raaaaare...",
    "A golden mallet for the meat pounding!",
    "Look at that pungent kill stick!",
    "MINE, MINE, MINE!",
    "A killing tool, put it in me!",
    "(We can use that to kill the deserving, grab it...)",
    "What a shiny soul stabber!",
]
maya_loot_lines = [
    "Whoa...",
    "That is lovely!",
    "That is beautiful.",
    "Wow!",
    "How about that?",
    "Nice.",
]
axton_loot_lines = [
    "Now THAT'S amazing.",
    "Awesome.",
    "Wow, that's... Wow.",
    "Good God...",
    "Well, hello there loot.",
    "Would you look at that.",
]
gaige_loot_lines = [
    "Rock and roll.",
    "Hooray!",
    "Yeah. I'm pretty good.",
    "NBD.",
    "The completionist in me is like YEEAAAH!",
    "Oh, I love comparin' loot!",
    "Numbers, numbers, math math math.",
    "Show me some green arrows.",
    "Not bad!",
    "Shh. Don't worry baby. I'll take good care of you.",
    "What's your name, sexy?",
    "I want it!",
    "Why, hello there.",
]
zero_loot_lines = [
    "A new instrument, / Waiting for a sonata / That I will conduct.",
    "Maybe I'll use you / To blow a midget's head off. / Or maybe I won't.",
    "Mine.",
    "Nice.",
    "Impressive.",
    "Well, well...",
    "Not bad.",
    "Comparisons made / But which is superior? / A tough decision.",
    "Hmmm...",
]
roland_loot_lines = [
    "Always nice to get resupplied.",
    "Always room for more loot.",
    "Armaments here.",
    "Alright! We got guns over here.",
    "Can never have enough stuff!",
    "This will help.",
    "Sweet! Wasn't expectin' that.",
    "It's like Christmas!",
]
lilith_loot_lines = [
    "More loot? Don't mind if I do.",
    "Let's see what we've got.",
    "Look at all this stuff.",
    "Hope I'm lucky!",
    "Mine, mine, aaaand mine!",
    "The loots be mine!",
]
mordecai_loot_lines = [
    "So, you want me to share huh?",
    "I'll just take a gander here...",
    "Lady Luck, do be kind.",
    "Satisfaction abounds.",
    "Hmm...So many to choose from.",
    "Hm...What do we have here?",
    "Don't mind if I do.",
]
brick_loot_lines = [
    "For me!?",
    "YEAH! Mine!",
    "That's my stuff.",
    "That's what I want.",
    "Alright!",
    "What's here?",
    "Ahhhahahahaha!",
]
# loot_lines = {
#     "zane_loot_lines": zane_loot_lines,
#     "salvador_loot_lines": salvador_loot_lines,
#     "krieg_loot_lines": krieg_loot_lines,
#     "maya_loot_lines": maya_loot_lines,
#     "axton_loot_lines": axton_loot_lines,
#     "gaige_loot_lines": gaige_loot_lines,
#     "zero_loot_lines": zero_loot_lines,
#     "roland_loot_lines": roland_loot_lines,
#     "lilith_loot_lines": lilith_loot_lines,
#     "mordecai_loot_lines": mordecai_loot_lines,
#     "brick_loot_lines": brick_loot_lines,
# }
