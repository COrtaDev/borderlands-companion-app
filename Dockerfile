FROM nikolaik/python-nodejs:python3.8-nodejs14 as base

WORKDIR /var/www
COPY . .

# Install Python Dependencies
RUN ["pip", "install", "-r", "requirements.txt"]
# # Patch the wikia package
# RUN ["mv", "/var/www/wikia.py", "/usr/local/lib/python3.8/site-packages/wikia"]


# Build our React App
RUN ["npm", "install", "--prefix", "client"]
ENV REACT_APP_BASE_URL=https://bl3companion.herokuapp.com
RUN ["npm", "run", "build", "--prefix", "client"]

# Move our react build for Flask to serve
# Use cp here because we're copying files inside our working directory, not from
# our host machine.
RUN ["cp", "-r", "client/build/", "app/static"]

# Setup Flask environment
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True
ENV SECRET_KEY=lkasjdf09ajsdkfljalsiorj12n3490re9485309irefvn,u90818734902139489230
ENV JWT_SECRET=woBtyUyPhI0iNiCDJsp4Dei-jB6Ep0nORWwTYqpCAQO_Jad9P9SbDr8SdRkz7zZGgDPtW5WLN-Lfng3kNTE0_K7zFaShY9WFK4A4fePLgCiQiC_1T7QvyG2FIOEndRyjx0pI9B9pCY1hfn7A97XrtM30xtLhu97ub0xVLuW4gR0

EXPOSE 8000

# COPY wikia.py /usr/local/lib/python3.8/site-packages/wikia

# RUN rm wikia.py
# Run flask environment
CMD gunicorn app:app
