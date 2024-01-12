FROM node:17-alpine3.15
WORKDIR /server
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3002
CMD ["node", "index.cjs"]