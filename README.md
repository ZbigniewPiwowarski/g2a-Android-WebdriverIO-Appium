# g2a Android WebdriverIO

# general information about tests

- test were developed on Samsung Galaxy S8, it will work on other devices with android as well but there is
  possibility that in some situations different phone will behave a little bit different
- tests are written for anonymous user account
- these test are end to end tests
- tests set up was tested on MacBook with intel chip and on windows 11, most probably it should work on MacBook
  with M1, M2 and Linux
- before every test app is restarted to have starting point the same for each test

# app version

- app version 4.0.22
- app was downloaded from googlePlay and converted to .apk file with https://apkcombo.com
- .apk file is included in repository

# known issues with tests

- in the app there is randomly displayed webview with commercial from time to time, tests check
  if there is this webview displayed before and after test, if this is displayed it will be closed.
  However one particular test on in the middle of which it was displayed most probably will fail.
- before all tests there is method which switches currency to EUR, it works slow for some reason but it works so don't think that tests stuck
- for some tests there is scroll used, it is not 100% accurate so there is some chance that on some devices it will spoil test or two

# known bugs in app

kliknac na continue na ekranie cart i potem kliknac wstecz, infinity loading bar i nic sie nie da kiknac w aplikacji, trzeba ubic apke i wlaczyc jeszce raz

price filter w filtrach, klikam przedzial od do i wyszukiwania pomimo tego sie nie pokrywaja z tym filtrem

# technologies used

- typescript
- webdriverIO
- mocha
- docker

# troubleshooting

- failed to connect to 'IP:555': Connection refused
  connect phone with cable
  run in terminal command: adb usb
  allow connection on your phone
  run adb tcpip 5555
  run connect IP:555
