from . import db, func
from app.models.loot import Loot


class Loot_Drop(db.Model):
    __tablename__ = 'loot_drops'
    # we can return a list of all the loots drops for a given user by querying all entries for users.id as creator_id
    # the length of that list is the total number of loot drops for a given user
    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    message = db.Column(db.String(144), nullable=False)
    loot_id = db.Column(db.Integer, db.ForeignKey('loots.id'), nullable=False)
    # -------------------UPDATE----------------------
    # I am removing prefixes for now given the inconsistency of the seed data available.
    # I think I will allow users to post their own prefixes for now. I just hope I don't get trolled...
    # prefix_id = db.Column(db.Integer, db.ForeignKey('prefixes.id'))
    # prefix_id = db.Column(db.Integer, db.ForeignKey('prefixes.id'))
    level = db.Column(db.Integer, nullable=False)
    # comments_id = db.Column(db.Integer, db.ForeignKey('comments.id'))
    # like_id = db.Column(db.Integer, db.ForeignKey('likes.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          server_onupdate=func.now())
    #######################################################################
    # here are the necessary association tables:
    # ----------------------------------------------------------------------
    loot_item = db.relationship('Loot', foreign_keys=[loot_id])
    # we can return a list of all the comments posted to the loot_drop
    # comments = db.relationship('Comments', foreign_keys=[comments_id])
    # we can get the total number of comments a loot_drop has by taking the length of the list returned
    # total_comments = len(comments)

    def to_dict(self):
        return {
            "id": self.id,
            "creator_id": self.creator_id,
            "message": self.message,
            "loot_id": self.loot_id,
            # "prefix_id": self.prefix_id,
            "level": self.level,
            "loot_item": self.loot_item.to_dict(),
            # "comments_id": self.comments_id,
            # "like_id": self.like_id
            "created_at": self.created_at.__str__(),
            "update_at": self.update_at.__str__(),
            # "comments": self.comments.to_dict(),
            # "total_comments": self.total_comments,
        }
