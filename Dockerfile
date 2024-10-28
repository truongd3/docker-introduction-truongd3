# Use an official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the src code to the container
COPY src/ ./src

# Ensure the logs directory is created inside the container
RUN mkdir -p /app/logs

# Expose port 3000
EXPOSE 3000

# Start the server from the src directory
CMD ["node", "src/server.js"]
