import jwt
from .config import Config


def create_jwt(user):
    try:
        user_data = {
            "id": user["id"],
            "email": user["email"],
            "username": user["username"]
        }
        new_jwt = jwt.encode(user, Config.JWT_SECRET, algorithm='HS256')
        return new_jwt
    except:
        raise RuntimeError("SignUp Failed")


def validate_jwt(request):
    auth_header = request.headers['Authorization']
    token = auth_header[7:]
    try:
        payload = jwt.decode(token, Config.JWT_SECRET)
        return {"user": payload, "token": token}
    except:
        return False
