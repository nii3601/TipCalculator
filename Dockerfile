# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN yarn install

COPY . .

RUN yarn run build

COPY .next ./.next

CMD ["yarn","run","dev"]