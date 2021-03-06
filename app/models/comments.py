from . import db, func


class Comment(db.Model):
    __tablename__ = 'comments'
    # We can return all the comments a user had made by querying all entries for the users.id as the commentor_id
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(144), nullable=False)
    loot_drop_id = db.Column(
        db.Integer, db.ForeignKey('loot_drops.id'), nullable=False)
    commentor_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(
        db.DateTime(timezone=True), server_default=func.now())
    update_at = db.Column(
        db.DateTime(timezone=True), server_onupdate=func.now())
    ##################################################################
    # here are the necessary association tables:
    # ----------------------------------------------------------------
    # we can return all the information about a the user who left a comment
    commentor = db.relationship('User', foreign_keys=[commentor_id])

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "loot_drop_id": self.loot_drop_id,
            "loot_drop_id": self.loot_drop_id,
            "created_at": self.created_at.__str__(),
            "update_at": self.update_at.__str__(),
            "commentor_id": self.commentor_id.to_dict(),
        }
