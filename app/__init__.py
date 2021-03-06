import os
from flask import Flask, render_template, request
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_migrate import Migrate

from app.models import db
from app.models.users import User
from app.models.comments import Comment
from app.models.loot_drops import Loot_Drop
from app.models.loot import Loot
from app.models.likes import Like
from app.models.follows import Follow

from app.api.user_routes import user_routes
from app.api.loot_drops_routes import loot_drops_routes

from app.config import Config

app = Flask(__name__, static_url_path='')

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(loot_drops_routes, url_prefix='/api/loot_drops')

db.init_app(app)
migrate = Migrate(app, db)

# Application Security
CORS(app)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path>')
def react_root(path):
    return app.send_static_file('index.html')
