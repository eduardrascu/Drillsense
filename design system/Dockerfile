
FROM node:20-alpine AS builder

# Enable corepack for Yarn
RUN corepack enable

ARG appEnv
ENV REACT_APP_ENV=$appEnv
ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY .storybook /app/.storybook
COPY src /app/src
COPY tokens /app/tokens
COPY *.json *.lock *.js *.ts /app/

WORKDIR /app

RUN yarn install
RUN yarn build:storybook

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/storybook-static /usr/share/nginx/html
COPY docker/nginx-default.conf /etc/nginx/conf.d/default.conf

EXPOSE 6006
ENTRYPOINT exec /usr/sbin/nginx -g "daemon off;"
