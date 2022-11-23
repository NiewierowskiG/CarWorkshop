FROM node:14.17.0-alpine as builder
### Stage 1: build ###

# Set working directory.
RUN mkdir /app
WORKDIR /app

# Copy app dependencies.
COPY my-app/package.json my-app/package-lock.json /app/my-app/

# Install app dependencies.
RUN npm install npm@latest -g #update npm
RUN npm install --prefix my-app

# Copy app files.
COPY . /app

# Build app
RUN npm run build --prefix my-app -- --output-path=./dist/out

### Stage 2: delivery ###

FROM nginx:1.15.7-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy output directory from builder to nginx image.
COPY --from=builder /app/my-app/dist/out /usr/share/nginx/html

# Copy nginx configuration file.
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf