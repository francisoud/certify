FROM node:latest
MAINTAINER francisoud <pub.cog@gmail.com>
ENV all_proxy=http://webdefence.global.blackspider.com:80/
ENV http_proxy=http://webdefence.global.blackspider.com:80/
ENV https_proxy=http://webdefence.global.blackspider.com:80/
EXPOSE 4200 49152
RUN mkdir /opt/certify && npm install -yg angular-cli typings
WORKDIR /opt/certify
