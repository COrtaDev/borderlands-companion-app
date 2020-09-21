from dotenv import load_dotenv
import json
from app import app, db
from app.models.users import User
from app.models.loot import Loot
from app.models.likes import Like
from app.models.comments import Comment
from app.models.loot_drops import Loot_Drop
load_dotenv()

f = open("loot.txt", "r")
loot_data = f.read()
loot_list = json.loads(loot_data)
loot_seeds = [Loot(item_name=loot['name'], type=loot['type'], elemental_types=loot['possibleElements'],)
              for loot in loot_list]

with app.app_context():
    db.drop_all()
    db.create_all()

    ian = User(username='Ian', email='ian@aa.io',
               hashed_password='hashMEpasswordMATEY')
    javier = User(username='Javier', email='javier@aa.io',
                  hashed_password='hashMEpasswordMATEY')
    dean = User(username='Dean', email='dean@aa.io',
                hashed_password='hashMEpasswordMATEY')
    angela = User(username='Angela', email='angela@aa.io',
                  hashed_password='hashMEpasswordMATEY')
    soonmi = User(username='Soon-Mi', email='soonmi@aa.io',
                  hashed_password='hashMEpasswordMATEY')
    alissa = User(username='Alissa', email='alissa@aa.io',
                  hashed_password='hashMEpasswordMATEY')
    demouser = User(username='DemoUser', email='DemoUserEmail@demo.com',
                    hashed_password='$2b$14$tf1vv3O/asmJFhpMDspZJOLv2Rlz6AwZhWyLh9XRXRpZ4Gd5hmsbG')

    loot1 = Loot(item_name="Seein' Dead", type="Class Mod", elemental_types=['None'], manufacturers=[
        'Zane'], splash_dmg=False, world_drop=True, dropped_from='Jackpot_(enemy)', reward_for='All_Bets_Off', location='VIP_Tower')
    loot2 = Loot(item_name="Hellwalker", type="Shotgun", elemental_types=['Fire'], manufacturers=[
        'Jackobs'], splash_dmg=False, world_drop=True, dropped_from='Road_Dog', reward_for='rare_enemy', location='The_Splinterlands')

    loot_drop1 = Loot_Drop(
        creator_id=7, message="This was a clutch drop...", loot_id=1, level=53)
    loot_drop2 = Loot_Drop(
        creator_id=7, message="By far the most OP thing in the game rn...", loot_id=2, level=62)

    like1 = Like(liker_id=1, loot_drop_id=1, loot_drop_creator_id=7)
    like2 = Like(liker_id=2, loot_drop_id=1, loot_drop_creator_id=7)
    like3 = Like(liker_id=3, loot_drop_id=1, loot_drop_creator_id=7)
    like4 = Like(liker_id=4, loot_drop_id=1, loot_drop_creator_id=7)
    like5 = Like(liker_id=1, loot_drop_id=2, loot_drop_creator_id=7)
    like6 = Like(liker_id=2, loot_drop_id=2, loot_drop_creator_id=7)
    like7 = Like(liker_id=3, loot_drop_id=2, loot_drop_creator_id=7)
    like8 = Like(liker_id=4, loot_drop_id=2, loot_drop_creator_id=7)
    like9 = Like(liker_id=5, loot_drop_id=2, loot_drop_creator_id=7)

    comment1 = Comment(comment='Great Find', loot_drop_id=1, commentor_id=1)
    comment2 = Comment(comment='super cool bruh',
                       loot_drop_id=1, commentor_id=2)
    comment3 = Comment(
        comment="Yeah you'll be seein' dead soon fool. JK I love you boo.", loot_drop_id=1, commentor_id=1)

    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)
    db.session.add(demouser)
    # db.session.add(loot1)
    # db.session.add(loot2)
    db.session.flush()
    db.session.add_all(loot_seeds)
    db.session.add(loot_drop1)
    db.session.add(loot_drop2)
    db.session.flush()
    db.session.add(like1)
    db.session.add(like2)
    db.session.add(like3)
    db.session.add(like4)
    db.session.add(like5)
    db.session.add(like6)
    db.session.add(like7)
    db.session.add(like8)
    db.session.add(like9)
    db.session.flush()
    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.commit()
