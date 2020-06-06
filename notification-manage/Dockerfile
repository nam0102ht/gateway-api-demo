FROM node:12.15.0-alpine

WORKDIR /home/btaskee/notification-manage
RUN chmod a+wrx /home/btaskee/notification-manage

COPY ./package-lock.json /home/btaskee/notification-manage
COPY ./package.json /home/btaskee/notification-manage

RUN npm install

COPY ./function /home/btaskee/notification-manage/function
COPY ./server.js /home/btaskee/notification-manage

EXPOSE 5001

CMD [ "npm", "start" ]
