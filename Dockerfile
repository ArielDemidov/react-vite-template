# Dockerizing a React App - https://tmpl.at/3IBqbrn
# Dockerizing a React Application using NGINX and React-Router | by Connor Kent | Level Up Coding - https://levelup.gitconnected.com/dockerizing-a-react-application-using-nginx-and-react-router-43154cc8e58c
# Configuring Nginx for React Router - https://www.barrydobson.com/post/react-router-nginx/

# Build step / image
# -------------------------------------------------- #

FROM node:18-alpine AS build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY .env.example ./
COPY package.json ./
RUN npm install

# copy app files
COPY . ./
COPY .env.docker .env.production

# build the app
RUN npm run build


# Deployment step / image
# -------------------------------------------------- #

FROM nginx:stable-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh
RUN dos2unix /docker-entrypoint.d/env.sh

COPY --from=build /app/dist /usr/share/nginx/www/
RUN chmod -R a+r /usr/share/nginx/www
    
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

# How to use
# -------------------------------------------------- #

## Remove previous build & container
# docker image rm react-template --force
# docker rm react-template-container --force

## Build image
# docker build -t react-template .

## Run the container and remove it after it exits
# docker run -it -d --name react-template-container --rm -p 1337:80 react-template
