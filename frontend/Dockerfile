FROM node:alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install --silent
CMD [ "npm", "start" ]
