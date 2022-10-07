FROM node:alpine
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install --silent
EXPOSE 3001
CMD [ "npm", "start" ]
