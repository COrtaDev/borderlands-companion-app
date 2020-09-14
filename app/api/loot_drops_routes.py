from flask import Blueprint, jsonify, request, session
from app.models import db
from app.models.loot_drops import Loot_Drop
import wikia
loot_drops_routes = Blueprint('loot_drops', __name__)


@loot_drops_routes.route('/<id>')
def get_loot_drops(id):
    loot_drops = Loot_Drop.query.filter(Loot_Drop.creator_id == int(id)).all()
    loot = [drop.to_dict() for drop in loot_drops]
    # print(loot_drops.loot)
    print(loot[0]['loot'])
    item = loot[0]['loot']
    item_wikia = wikia.page("Borderlands", item['item_name'])
    print(item_wikia)
    item_page_url = item_wikia.url
    item_img_url = item_wikia.images[0]
    item_content = item_wikia.content
    item_summary = item_wikia.summary
    item_info = {
        'itemUrl': item_page_url,
        'imgUrl': item_img_url,
        'content': item_content,
        'summary': item_summary}
    # wikia_info = item_info.to_dict()
    print(item_info)
    # wikia_info = []
    return jsonify(loot=loot, item_info=item_info)
