FROM node:alpine

WORKDIR /usr/app/

COPY package.json /usr/app/

RUN yarn

ENV APPLICATION_PORT=3000
ENV USERNAME=dev
ENV PASSWORD=dev123
ENV DATABASE=gobarber

EXPOSE 3000
