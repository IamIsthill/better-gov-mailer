# Use official Deno image
FROM denoland/deno:alpine

# Set working directory
WORKDIR /app

# Copy dependencies first (deno.json + lockfile)
COPY deno.json ./
COPY deno.lock ./

# Copy source code
COPY ./src ./src

# Cache dependencies
RUN deno cache ./src/index.ts

# Expose port
EXPOSE 3000

ENV NODE_ENV=production

# Run the app
CMD ["deno", "run", "--allow-net", "--allow-env", "./src/index.ts"]
