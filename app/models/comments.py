from . import db, func


class Comments(db.Model):
    __tablename__ = 'comments'

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

    commentor = db.relationship('User', foreign_keys=[commentor_id])

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "loot_drop_id": self.loot_drop_id,
            "commentor_id": self.commentor_id,
            "loot_drop_id": self.loot_drop_id,
            "created_at": self.created_at,
            "update_at": self.update_at,
        }
