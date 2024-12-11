# Base image 
FROM --platform=linux/amd64 node:20 as builder

# Set the working directory
WORKDIR /usr/src/app

# Copy only package files first for better caching
COPY package*.json ./
COPY turbo.json ./
COPY apps/admin/package.json ./apps/admin/
COPY apps/web/package.json ./apps/web/
COPY packages/ui/package.json ./packages/ui/

# Install dependencies
RUN npm install --force

# Copy the rest of your application code
COPY . .

# Build the UI package first
RUN cd packages/ui && npm run build

# Build all applications
RUN npm run build

# Production stage
FROM --platform=linux/amd64 node:20-slim
WORKDIR /usr/src/app

# Copy everything from builder
COPY --from=builder /usr/src/app .

# Expose the ports
EXPOSE 3000 3003

# Command to run your application
CMD ["npm", "run", "start"]