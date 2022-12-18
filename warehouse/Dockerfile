FROM node:18.10

RUN mkdir /workshop
WORKDIR /warehouse

COPY ./my-app/package*.json /warehouse 

RUN npm install

EXPOSE 3080