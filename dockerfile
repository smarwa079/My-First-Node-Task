FROM node:18-alpine
WORKDIR /app
COPY index.js package*.json ./
RUN npm install 
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
