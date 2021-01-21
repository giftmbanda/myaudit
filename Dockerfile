# our first command is to pull a base image
FROM node:8-alpine

# command is about creating a new directory
RUN mkdir -p /usr/src/app

# assign the created folder as a working dir
WORKDIR /usr/src/app

# copying the ‘package.json’ file to working dir
COPY package*.json /usr/src/app

# run the ‘npm cache clean’ command
RUN npm cache clean

# run the ‘npm install’ command
RUN npm install

# copying everything to working dir
COPY . /usr/src/app

# asks the container to expose port number 3333
EXPOSE 3333

CMD [ "npm", "start" ]