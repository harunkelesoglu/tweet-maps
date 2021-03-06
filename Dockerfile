FROM node:8.12.0-alpine

#Create app directory
WORKDIR /app
ADD . /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

EXPOSE 3002
CMD [ "npm", "start" ]