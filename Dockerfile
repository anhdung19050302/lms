FROM node:18.18.1-alpine3.18

WORKDIR /app

COPY . .

RUN npm i && npm run build

ENV NODE_ENV=production

CMD [ "node", "/app/dist/main.js" ]

# FROM node:18.18.1-alpine3.18 as builder

# WORKDIR /app

# COPY . .

# RUN npm i && npm run build

# FROM node:18.18.1-alpine3.18

# WORKDIR /app

# COPY --from=builder /app/dist .

# ENV NODE_ENV=production
# ENV PORT=
# ENV DATABASE_HOST=
# ENV DATABASE_PORT=
# ENV DATABASE_USERNAME=
# ENV DATABASE_PASSWORD=
# ENV DATABASE_DB_NAME=

# CMD [ "node", "/app/main.js" ]
