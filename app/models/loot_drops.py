from . import db, func


class Loot_Drop(db.Model):
    __tablename__ = 'loot_drops'

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    message = db.Column(db.String(144), nullable=False)
    loot_id = db.Column(db.Integer, db.ForeignKey('loots.id'), nullable=False)
    prefix_id = db.Column(db.Integer, db.ForeignKey('prefixes.id'))
    level = db.Column(db.Integer, nullable=False)
    comments_id = db.Column(db.Integer, db.ForeignKey('comments.id'))
    # like_id = db.Column(db.Integer, db.ForeignKey('likes.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          server_onupdate=func.now())
    #######################################################################
    # here are the necessary association tables:
    # ----------------------------------------------------------------------
    # we can return a list of all the comments posted to the loot_drop
    comments = db.relationship('Comments', foreign_keys=[comments_id])
    # we can get the total number of comments a loot_drop has by taking the length of the list returned
    total_comments = len(comments)

    def to_dict(self):
        return {
            "id": self.id,
            "creator_id": self.creator_id,
            "message": self.message,
            "loot_id": self.loot_id,
            "prefix_id": self.prefix_id,
            "level": self.level,
            "comments_id": self.comments_id,
            # "like_id": self.like_id
            "created_at": self.created_at,
            "update_at": self.update_at,
            "comments": self.comments.to_dict(),
            "total_comments": self.total_comments,
        }
