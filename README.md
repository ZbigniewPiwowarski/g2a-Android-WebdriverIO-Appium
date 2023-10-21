# g2a Android WebdriverIO

# general information about tests

- test were developed on Samsung Galaxy S8, it will work on other devices with android as well but there is
  possibility that in some situations different phone will behave a little bit different
- tests are written for anonymous user account
- these test are end to end tests
- tests set up was tested on MacBook with intel chip and on windows 11, most probably it should work on MacBook
  with M1, M2 and Linux as well
- before every test app is restarted to have starting point the same for each test, every test is independent
  from each other
- tests run in docker so there is no need for appium set up

# app version

- app version 4.0.22
- app was downloaded from googlePlay and converted to .apk file with https://apkcombo.com
- .apk file is included in repository

# requirements

- installed docker: https://docs.docker.com/get-docker/
- device with android system
- android device and local machine connected to the same wifi

# installation

run in repository root directory in terminal:

1. sudo docker build -t appium-image -f .dockerfile .

2. docker run --name appium-container appium-image

run in second terminal in repository root directory:

1. docker exec -it appium-container adb connect <your phone Ip address>:5555
   after this command agree on android device for connection
   - to read how to check phone IP address go to section "#Phone Ip address" in README
run tests with command:

2.  docker exec -it appium-container npm run wdio:docker

# known issues with tests

- in the app there is randomly displayed webview with commercial from time to time, this will cause particular test fail
- before all tests there is method which switches currency to EUR, it works slow for some reason but it works so don't think that tests stuck
- it looks like all tests in the profile screen work very slow, it looks that problem is app related in context of tests
- for some tests there is scroll used, it is not 100% accurate so there is some chance that on some devices it will spoil test or two
- docker image with appium used here is not the newest one, the reason for it is that for some reason when I run webdriverIO tests with docker on node.js higher than 16 there is "segmentation fault" in docker, docker image with appium used here (appium/appium:v1.22.3-p1) has node.js 16.x


# technologies used

- typescript
- webdriverIO
- mocha
- docker
- appium

# phone Ip address
- Go to your device settings and in search bar type: IP address
- Or find it in settings manually

# troubleshooting

- failed to connect to 'IP:555': Connection refused
  connect phone with cable
  run in terminal command: adb usb
  allow connection on your phone
  run adb tcpip 5555
  run connect IP:555
- ERROR [internal] load metadata for docker
  try command in terminal: rm ~/.docker/config.json


# TO DO

- add screenshots after each test fail
- figure out how to deal with randomly appearing commercial webview witch spoils test randomly
- add "allure test reporter" as it is better than current "spec test reporter"