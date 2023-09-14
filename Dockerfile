# Set the base image
FROM node:14-alpine as build-stage

# Create a directory for the app
WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files
COPY . .

# Build the Next.js app
RUN npm run build

# Use a multi-stage build to only keep relevant directories
FROM node:14-alpine

# Create a directory for the app
WORKDIR /app

# Copy only relevant directories from the build stage
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 4000

# Start the app
CMD [ "npm", "run", "start" ]
