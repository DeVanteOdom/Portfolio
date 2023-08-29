FROM node:18

WORKDIR .

COPY package.json .
COPY .next .next/

RUN npm install --omit=dev

EXPOSE 8000
CMD [ "npm", "start" ]