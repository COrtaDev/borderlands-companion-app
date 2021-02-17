import jwt
from .config import Config


def create_jwt(user):
    try:
        user_data = {
            "id": user["id"],
            "email": user["email"],
            "username": user["username"]
        }
        new_jwt = jwt.encode(user_data, Config.JWT_SECRET, algorithm='HS256')
        print(new_jwt,"this is the new one")
        return new_jwt
    except:
        raise RuntimeError("Operation: 'create_jwt' Failed")


def validate_jwt(request):
    auth_header = request.headers['Authorization']
    token = auth_header[7:]
    print(token,"this is the friggin token")
    try:
        payload = jwt.decode(token, Config.JWT_SECRET, algorithms='HS256')
        print(payload,"yo")
        return {"user": payload, "token": token}
    except:
        return False
