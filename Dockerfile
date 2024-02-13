######## ! Build Stage ! #######
FROM node:18 AS build

WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy all files
COPY . .

# Delete .env.local file as FE itself is production ready
RUN rm -f .env.local

# Build the app
RUN yarn build

######## ! Production Stage ! ########
FROM node:18

WORKDIR /app

# Copy only the production node modules from the build stage
COPY --from=build /app/node_modules ./node_modules
# Copy the built Next.js app
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY package.json yarn.lock ./

# Expose the port the app runs on
EXPOSE 3100

# Start the app
CMD ["yarn", "start"]
