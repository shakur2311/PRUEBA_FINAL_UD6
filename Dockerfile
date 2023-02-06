FROM node:16

WORKDIR /usr/src

COPY . .

EXPOSE 3000
CMD [ "node", "app/index.js" ]