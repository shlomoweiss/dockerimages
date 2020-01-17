FROM docker.io/node:13-stretch

LABEL net.skyplabs.maintainer-name="Paul-Emmanuel Raoul"
LABEL net.skyplabs.maintainer-email="skyper@skyplabs.net"

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y --no-install-recommends chromium

ENV CHROME_BIN=chromium

WORKDIR /usr/src/app
CMD ["npm", "start"]