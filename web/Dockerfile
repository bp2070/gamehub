FROM node:17

RUN apt-get update
RUN apt-get install vim -y

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY webpack.config.js webpack.config.js

COPY public public

RUN npm install

CMD ["npm", "run", "build-start"]