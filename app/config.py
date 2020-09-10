import os

class Config:
  SECRET_KEY=os.environ.get('SECRET_KEY')
  JWT_SECRET=os.environ.get('JWT_SECRET')
  SQLALCHEMY_TRACK_MODIFICATIONS=False
  SQLALCHEMY_DATABASE_URI=os.environ.get('DATABASE_URL')
  SQLALCHEMY_ECHO=True
