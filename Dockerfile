FROM node:8.1-alpine

RUN mkdir -p /usr/src/app
ADD ./index.js /usr/src/app
ADD ./package.json /usr/src/app
ADD ./api/ /usr/src/app/api
RUN cd /usr/src/app && npm install --production

EXPOSE 3000

WORKDIR /usr/src/app
CMD ["npm", "start"]