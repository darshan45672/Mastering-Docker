FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

COPY . .

RUN addgroup -g 1001 -S nodejs

RUN adduser -S nodejs -u 1001

RUN chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
 CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

CMD [ "npm", "start" ]