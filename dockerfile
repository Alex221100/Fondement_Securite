# Build
FROM node:10 AS builder
WORKDIR /src
COPY . .
RUN yarn install && yarn build

# Deploy
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /src/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]