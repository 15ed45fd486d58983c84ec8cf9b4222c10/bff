FROM node:18-alpine AS build

RUN mkdir /app
WORKDIR /app
COPY package.json .

RUN npm i -g pnpm
RUN pnpm install

COPY . .
RUN pnpm run prisma:migrate
RUN pnpm run prisma:generate
RUN pnpm run build
RUN pnpm prune --prod
WORKDIR /app/build

FROM node:18-alpine as prod

COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/dist/ /app/dist/
WORKDIR /app

EXPOSE 3001
CMD [ "node", "dist/main.js" ]