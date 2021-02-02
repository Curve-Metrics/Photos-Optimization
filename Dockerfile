FROM node:14.15.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

# RUN npm global add nodemon

EXPOSE 3002

CMD [ "npm", "run", "docker-start" ]
