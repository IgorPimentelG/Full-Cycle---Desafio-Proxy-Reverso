FROM node:latest

ENV DOCKERIZE_VERSION v0.7.0

WORKDIR /usr/share/app
COPY . .
RUN npm install

RUN apt-get update \
  && apt-get install -y wget \
  && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
  && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

ENTRYPOINT [ "dockerize", "-wait", "tcp://mysql:3306", "-timeout", "30s", "npm", "start" ]
