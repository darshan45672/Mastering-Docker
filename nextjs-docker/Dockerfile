FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN cp -r .next/static .next/standalone/.next/ 2>/dev/null || true
RUN cp -r public .next/standalone/public 2>/dev/null || true

EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]