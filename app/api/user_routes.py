import bcrypt
from flask import Blueprint, jsonify, request, session
from app.models import db
from app.models.users import User
from app.auth import create_jwt, validate_jwt

user_routes = Blueprint('users', __name__)


@user_routes.route('', methods=['GET', 'POST'])
def handle_signup():
    if request.method == "POST":
        return signup()
    else:
        session['request'] = request.json
        req = session.get('request')
        return("You are here")


def signup():
    data = request.json
    if not data:
        return ('You are here: Failed Request')
    # Create a hashed password
    password = data['password'].encode()
    hashed_password = bcrypt.hashpw(
        password, bcrypt.gensalt(14)).decode('utf-8')
    # Generate and add new user to db
    new_user = User(username=data['userName'],
                    email=data['email'],
                    hashed_password=hashed_password)
    db.session()
    db.session.add(new_user)
    db.session.commit()
    # get user and create jwt to return
    user = User.query.filter(User.email == data['email']).first().to_dict()
    jwt = create_jwt(user)
    # only commit the new user after everything passes with no errors
    return jsonify({"user": user, "token": str(jwt)})


@user_routes.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter(User.email == data['email']).first()
    # print(user)
    hashed_password = user.hashed_password
    if bcrypt.checkpw(data['password'].encode(), hashed_password.encode()):
        print(user)
        user_data = user.to_dict()
        print(user_data)
        jwt = create_jwt(user_data)
        return jsonify({"user": user_data, "token": str(jwt)})
    else:

        return jsonify('Bad Login')


@user_routes.route('/restore')
def restore():
    auth_header = request.headers['Authorization']
    validated = validate_jwt(request)
    print(validated)
    if (validated):
        return jsonify(validated)
    else:
        return jsonify(None)
