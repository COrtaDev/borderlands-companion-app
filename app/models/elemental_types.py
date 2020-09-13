from . import db, func


class Elemental_Type(db.Model):
    __tablename__ = 'elemental_types'
    # for clarity:
    # there will be an entry for each element_type in the game:
    #### fire
    #### shock
    #### corrosive
    #### radiation
    #### cryo
    #### none
    #### always (which is to say it will never spawn a non-elemental variant)

    id = db.Column(db.Integer, primary_key=True)
    element = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "element": self.element,
        }
