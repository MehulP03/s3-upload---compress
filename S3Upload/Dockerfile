FROM node:14-alpine3.16
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
EXPOSE 3002
CMD ["node", "index.cjs"]