FROM node:17-alpine3.15
WORKDIR /frontend
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]