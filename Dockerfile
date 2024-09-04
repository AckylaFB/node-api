FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npx prisma generate

EXPOSE 3333

CMD ["npm", "run", "dev"]
