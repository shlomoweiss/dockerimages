# headlesschrom

follow this  link example: https://blog.skyplabs.net/2017/08/29/angular-running-unit-tests-with-chromium-in-a-docker-container/

in the angular project folder run :
sudo docker run --rm -v $(pwd):/usr/src/app:z angular-dev npm run test:ci

if you need to install manully debian packges goto:
https://packages.debian.org/stretch/

