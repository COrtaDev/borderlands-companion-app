from flask import Blueprint, jsonify, request, session
from app.models import db
from app.models.loot_drops import Loot_Drop
import wikia
loot_drops_routes = Blueprint('loot_drops', __name__)


@loot_drops_routes.route('/<id>')
def get_loot_drops(id):
    loot_drops = Loot_Drop.query.filter(Loot_Drop.creator_id == int(id)).all()
    # print('\n\n\n\n***THESE ARE OUR LOOT DROPS***\n\n', loot_drops, '\n')
    loot = [drop.to_dict() for drop in loot_drops]
    # print('\n\n\n\n***THESE ARE OUR LOOT DROPS***\n\n', loot, '\n')
    additional_info = []
    for loot_drop in loot:
        print(loot_drop)

    return jsonify(loot=loot)
    # print(loot_drops.loot)
    # print('\n***THIS IS OUR LOOT DROP***\n\n', loot[0]['loot_item'], '\n')
    # We would like to fetch additional info for each piece of loot in our loot drops
    # We have a helper function that will grab the
    # loot_items = [fetch_additional_info(item) for item in loot]
    # item = loot[0]['loot_item']
    ########################################################################################
    ########################################################################################
    ########################################################################################
    # originally, we wanted to ping the aditional info at the time of this query,
    # but it may be better to ping the additional information later

    # Here we create a list of items from the loot drops returned from the query
    # We will them pass each to the helper function
    # items = [loot['loot_item'] for loot in loot]
    # print('\n***THESE ARE ITEMS***\n\n', items, '\n\n\n')
    # loot_info = [fetch_additional_info(item) for item in items]
    # print('\n***THESE IS THE MORE INFO LIST***\n\n', loot_info, '\n\n\n')

    # item_info = fetch_additional_info(item)
    # print('\n***THIS IS OUR ITEM INFO***\n\n', item_info, '\n\n\n')

    # return jsonify(loot=loot, loot_info=loot_info)


def fetch_additional_info(item):
    print('***this is inside the function***\n',
          item, '\n', item['item_name'], '\n')
    item_wikia = wikia.page("Borderlands", item['item_name'])
    item_page_url = item_wikia.url
    item_img_url = item_wikia.images[0]
    item_content = item_wikia.content
    item_summary = item_wikia.summary
    item_info = {
        'item_info': {
            'itemUrl': item_page_url,
            'imgUrl': item_img_url,
            'content': item_content,
            'summary': item_summary}}
    return item_info
