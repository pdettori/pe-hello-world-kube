# Content of templates/02-image-and-chart/skeleton/Dockerfile
FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY server.js .
CMD [ "node", "server.js" ]