from random import randint
from app.models.likes import Like
# each user so far has 3 drops and there are 20 seed users so far,
# and we want each loot drop to be liked 10-20 times. the loop we
# want to create needs to accomplish this.
likes_seed_data = [Like(liker_id=i, loot_drop_id=j, loot_drop_creator_id=i)
                   for i in range(1, 21) for j in range(1, 61)]
