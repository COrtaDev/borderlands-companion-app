from dotenv import load_dotenv
from app import app
from app.models import db
from app.models.users import User
from app.models.loot import Loot
load_dotenv()


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
    loot = Loot(item_name="Seein' Dead", type="Class Mod", elemental_types=['None'], manufacturers=[
                'Zane'], splash_dmg=False, world_drop=True, dropped_from='Jackpot_(enemy)', reward_for='All_Bets_Off', location='VIP_Tower')

    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)
    db.session.add(demouser)
    db.session.add(loot)

    db.session.commit()
