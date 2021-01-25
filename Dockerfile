# our first command is to pull a base image
FROM node:8

# command is about creating a new directory
# RUN mkdir -p /usr/src/app

# assign the created folder as a working dir
WORKDIR . /app

# copying the ‘package.json’ file to working dir
COPY package.json ./

# run the ‘npm cache clean’ command
# RUN npm cache verify

# run the ‘npm install’ command
RUN npm install

# copying everything to working dir
COPY . .

# asks the container to expose port number 3333
EXPOSE 8080

CMD [ "npm", "start" ]