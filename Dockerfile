FROM node:9.11.1-alpine

RUN yarn global add http-server

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 8080

CMD [ "http-server", "dist" ]
