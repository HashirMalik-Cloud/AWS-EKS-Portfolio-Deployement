# Stage 1 - Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Stage 2 - Runtime stage (only copy necessary files)
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app /app

# Optional: Clean cache (reduces size further)
RUN npm cache clean --force

EXPOSE 5000
CMD ["node", "app.js"]

