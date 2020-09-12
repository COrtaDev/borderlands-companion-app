from . import db, func


class Loot(db.Model):
    __tablename__ = 'loots'

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    manufacturer_id = db.Column(
        db.Integer, db.ForeignKey('manufacturers.id'), nullable=False)
    splash_dmg = db.Column(db.Boolean, nullable=False)
    element_id = db.Column(db.Integer, db.ForeignKey('elemental_types.id'))
    world_drop = db.Column(db.Boolean, nullable=False)
    dropped_from = db.Column(db.String)
    reward_for = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "item_name": self.item_name,
            "type": self.type,
            "manufacturer_id": self.manufacturer_id,
            "splash_dmg": self.splash_dmg,
            "element_id": self.element_id,
            "world_drop": self.world_drop,
            "dropped_from": self.dropped_from,
            "reward_for": self.reward_for,
        }
