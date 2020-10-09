from . import db, func


class Loot(db.Model):
    __tablename__ = 'loots'

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    # the following line was my previous idea for storing elemental data of each item:
    # element_id = db.Column(db.ARRAY, db.ForeignKey('elemental_types.id'))
    # -------NEW IDEA------------
    # We would like to return an array of all possible elemental varients that could spawn for a given item
    # The benefit would be that his would remove the need for a elemental types table, example:
    # elemental_types: [fire, corrosive, cryo, always] - this would be iterable on the front end
    # and we would be able to map these values where they need to go. It would also become easier to seed,
    # instead of a string, any array could accomodate any combination of elemental types that change over
    # time, should the game decide to change what varieties may spawn....
    elemental_types = db.Column(db.ARRAY(db.String), nullable=False)
    # manufacturer_id = db.Column(
    #     db.Integer, db.ForeignKey('manufacturers.id'), nullable=False)
    # We have decided to change manufacturers for the same reasons as elemental types, some items may spawn
    # with one or many different manufacuters so we can simple seed them as arrays and map them where they need to go
    manufacturers = db.Column(db.ARRAY(db.String), nullable=False)
    splash_dmg = db.Column(db.Boolean,)
    world_drop = db.Column(db.Boolean,)
    dropped_from = db.Column(db.String)
    reward_for = db.Column(db.String)
    location = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "item_name": self.item_name,
            "type": self.type,
            "splash_dmg": self.splash_dmg,
            # "element_id": self.element_id,
            "elemental_types": self.elemental_types,
            # "manufacturer_id": self.manufacturer_id,
            "manufacturers": self.manufacturers,
            "world_drop": self.world_drop,
            "dropped_from": self.dropped_from,
            "reward_for": self.reward_for,
            "location": self.location,
        }
