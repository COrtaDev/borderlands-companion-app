from . import db, func


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String, nullable=False)
    loot_drop_id = db.Column(db.Integer, db.ForeignKey('loot_drops.id'))
    follows_id = db.Column(db.Integer, db.ForeignKey('follows.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          server_onupdate=func.now())
    ####################################################################
    # here are the necessary association tables:
    # ------------------------------------------------------------------
    # we can return a list of all the loot drops associated with a user
    loot_drops = db.relationship('Loot_Drops', foreign_keys=[loot_drop_id])
    # we can get the number of loot_drops by taking the length of this list.
    total_loot_drops = len(loot_drops)
    # we can return a list of all the followers a user has
    followers = db.relationship('Follows', foreign_keys=[follows_id])
    # we can get the number of followers by taking the length of this list.
    total_followers = len(followers)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "loot_drop_id": self.loot_drop_id,
            "follows_id": self.follows_id,
            "created_at": self.created_at,
            "update_at": self.update_at,
            "loot_drops": self.loot_drops.to_dict(),
            "total_loot_drops": self.total_loot_drops,
            "follows": self.follows.to_dict(),
            "total_followers": self.total_followers,
        }
