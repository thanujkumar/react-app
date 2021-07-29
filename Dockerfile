FROM node:latest
# set working directory
WORKDIR /app

# install app dependencies where workflow would create build directory for npm run build
COPY build ./

RUN npm install -g serve

EXPOSE 5000

# start app with command serve -s <build folder where static files exists>
CMD ["serve", "-s", "/app"]