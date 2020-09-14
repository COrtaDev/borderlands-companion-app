from . import db, func


class Follow(db.Model):
    __tablename__ = 'follows'
    # for clarity:
    # follower_id --> followed_id
    # when a user 'follows' another user, their id (follower_id)
    # always points to the id of user being 'followed' (followed_id)
    id = db.Column(db.Integer, primary_key=True)
    # the follower is the user  who is 'following'
    follower_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    # the followed user is the one who has 'followers'
    followed_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(
        db.DateTime(timezone=True), server_default=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "follower_id": self.follower_id,
            "followed_id": self.followed_id,
            "created_at": self.created_at.__str__(),
        }
