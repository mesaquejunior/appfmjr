FROM node:lts
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./dist/* ./
EXPOSE 3333
CMD [ "node", "server.js" ]

# docker build . -t mesaquejunior/appfmjr
# docker run --name appfmjr -p 3333:3333 -d mesaquejunior/appfmjr