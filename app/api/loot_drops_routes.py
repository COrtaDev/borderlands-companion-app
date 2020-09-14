from flask import Blueprint, jsonify, request, session
from app.models import db
from app.models.loot_drops import Loot_Drop

loot_drop_routes = Blueprint('loot_drops', __name__)


@loot_drop_routes.route('/<id>')
def get_loot_drops(id):
    pass
