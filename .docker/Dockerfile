FROM node:20 AS builder

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY .docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/hilbertsen/ /usr/share/nginx/html
