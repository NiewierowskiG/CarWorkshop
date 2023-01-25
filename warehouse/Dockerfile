FROM node:18.10

RUN mkdir /workshop
WORKDIR /warehouse

COPY ./my-app/package*.json /warehouse 

RUN npm install
RUN npm install bootstrap
RUN npm install axios

EXPOSE 3080