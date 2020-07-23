# Step 1: Build the app in image 'builder'
FROM node:12.18.2 AS builder

WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

# Step 2: Use build output from 'builder'
FROM nginx:stable
LABEL version="1.0.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/product-app .
