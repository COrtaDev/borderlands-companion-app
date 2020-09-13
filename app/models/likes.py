from . import db, func


class Like(db.Model):
    __tablename__ = 'likes'

    # we can get the number of likes a loot_drop has by querying the likes table with the
    # specified loot_drops.id and returning the length of the list returned by the query.
    id = db.Column(db.Integer, primary_key=True)
    liker_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    loot_drop_id = db.Column(db.Integer, db.ForeignKey('loot_drops.id'))
    loot_drop_creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(
        db.DateTime(timezone=True), server_default=func.now())
    #######################################################################
    # here are the necessary association tables:
    # we can return the all the info about the user who liked the loot_drop
    liker = db.relationship('User', foreign_keys=[liker_id])
    # we can return the all the info about the loot_drop that was liked,
    loot_drop = db.relationship('Loot_Drop', foreign_keys=[loot_drop_id])
    # we can return the all the info about the user whose loot_drop was liked
    loot_drop_creator = db.relationship(
        'User', foreign_keys=[loot_drop_creator_id])

    def to_dict(self):
        return {
            "id": self.id,
            "liker_id": self.liker_id,
            "loot_drop_creator_id": self.loot_drop_creator_id,
            "loot_drop_id": self.loot_drop_id,
            "created_at": self.created_at,
            "liker": self.liker.to_dict(),
            "loot_drop": self.loot_drop.to_dict(),
            "loot_drop_creator": self.loot_drop_creator.to_dict(),
        }
