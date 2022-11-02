FROM node:17
MAINTAINER Aarav verma.aarav@outlook.com
WORKDIR /usr/local/element-lookup
COPY . .
RUN npm i -g serve
EXPOSE 3000

CMD ["serve", "-S", "."]