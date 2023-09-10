FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json

RUN npm install -g pnpm

COPY apps/reservations apps/reservations
COPY libs libs

RUN pnpm install -r

RUN pnpm run build reservations

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --prod -r

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/reservations/main"]
# docker build ../../ -f Dockerfile -t voyageur_reservations
# docker run -p 3000:3000 voyageur_reservations