FROM node:20-alpine AS build

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package.json ./

USER root

RUN chown -R app/app .

USER app

RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
