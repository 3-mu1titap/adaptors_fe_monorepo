# Base image
FROM --platform=linux/amd64 node:20

# Set the working directory
WORKDIR /usr/src/app

# RUN apt-get update && apt-get install -y python3 make g++

# Copy package.json and package-lock.json first to leverage Docker cache
# COPY package.json ./
# COPY turbo.json ./
# COPY apps/client/package.json ./apps/client/
# COPY packages/ui/package.json ./packages/ui/
COPY ./ ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

Run npm run build

# Expose the port that your app runs on
EXPOSE 3001 3002 3003

# Command to run your application
CMD ["npm", "run", "start"]
