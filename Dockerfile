# Set the base image
FROM node:14-alpine

# Create a directory for the app
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Copy the node_modules directory
COPY node_modules ./node_modules

# Copy the .next directory
COPY .next ./.next

# Copy public directory if you have one
COPY public ./public

# Expose the port the app runs on
EXPOSE 80

# Start the app
CMD [ "npm", "start" ]
