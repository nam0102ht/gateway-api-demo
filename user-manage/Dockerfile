FROM node:12.15.0-alpine

WORKDIR /home/btaskee/user-manage
RUN chmod a+wrx /home/btaskee/user-manage

COPY ./package-lock.json /home/btaskee/user-manage
COPY ./package.json /home/btaskee/user-manage

RUN npm install

COPY ./function /home/btaskee/user-manage/function
COPY ./server.js /home/btaskee/user-manage

EXPOSE 5000

CMD [ "npm", "start" ]
