FROM appium/appium:v1.22.3-p1

WORKDIR /app
ADD . /app


RUN npm install