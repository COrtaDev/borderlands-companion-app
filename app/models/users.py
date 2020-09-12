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

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "loot_drop_id": self.loot_drop_id,
            "follows_id": self.follows_id,
            "created_at": self.created_at,
            "update_at": self.update_at,
        }
