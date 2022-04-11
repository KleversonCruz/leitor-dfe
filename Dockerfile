FROM node:16-alpine As development

WORKDIR /usr/src

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:14-alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/dist ./dist

CMD ["node", "dist/main"]