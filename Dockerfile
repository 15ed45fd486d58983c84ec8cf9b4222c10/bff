FROM node:18-alpine AS build

RUN mkdir /app
WORKDIR /app
COPY package.json .

RUN npm i -g pnpm
RUN pnpm install

COPY . .
RUN pnpm run build
RUN pnpm prune --prod

EXPOSE 3001
CMD [ "npm", "run", "start:prod" ]