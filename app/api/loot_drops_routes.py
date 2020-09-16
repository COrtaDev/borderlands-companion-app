from flask import Blueprint, jsonify, request, session
from app.models import db
from app.models.loot_drops import Loot_Drop
from app.models.likes import Like
from app.models.comments import Comment
from collections import Counter
import wikia
loot_drops_routes = Blueprint('loot_drops', __name__)


@loot_drops_routes.route('/<id>')
def get_loot_drops(id):
    # We need to query for the number of likes a user has
    total_likes_on_all_drops = Like.query.with_entities(Like.loot_drop_id).filter(
        Like.loot_drop_creator_id == int(id)).all()
    likes = Counter(total_likes_on_all_drops)
    # We query the loot_drop table and return all the users loot drops
    loot_drops = Loot_Drop.query.filter(Loot_Drop.creator_id == int(id)).all()
    loot_drop_list = [drop.to_dict() for drop in loot_drops]
    # We call the wiki api for each the loot_items in the user has
    additional_info = []
    # We append the data from the api to the additional_info queue
    for loot_item in loot_drop_list:
        # we grab the loot drops id so we can count the likes/comments
        drop_id = loot_item['id']
        total_likes = dict(likes=likes[(drop_id,)])
        # We need to query for the number of comments a user has
        total_comments_on_all_drops = Comment.query.with_entities(
            Comment.loot_drop_id).filter(Comment.loot_drop_id == drop_id).all()
        comments = Counter(total_comments_on_all_drops)
        total_comments = dict(comments=comments[(drop_id,)])
        # an item is the weapon, mod, shield, or artifact
        item = loot_item['loot_item']
        # we extract the name of the item here for use in the api
        item_name = item['item_name']
        # call to the api and append the data to the queue
        additional_info.append(fetch_additional_info(item_name))
        additional_info.append(total_likes)
        additional_info.append(total_comments)
    # loot_drop_list.append(total_likes)
    # Once the queue is full we update it into the loot drop list
    for loot_drop in loot_drop_list:
        # We pop the 3 things we pushed into the queue into the lootdrop
        loot_drop.update(additional_info.pop(0))
        loot_drop.update(additional_info.pop(0))
        loot_drop.update(additional_info.pop(0))
    return jsonify(loot=loot_drop_list)


def fetch_additional_info(item_name, all=False):
    item_wikia = wikia.page("Borderlands", item_name)
    item_page_url = item_wikia.url
    item_img_url = item_wikia.images[0]
    item_content = item_wikia.content
    item_summary = item_wikia.summary
    item_info = {
        'item_info': {
            'itemUrl': item_page_url,
            'imgUrl': item_img_url,
            'content': item_content,
            'summary': item_summary
        }}
    return item_info
