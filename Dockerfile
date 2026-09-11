# Official Playwright image for ARM64 (your Mac is Apple Silicon based on arm64v8)
FROM mcr.microsoft.com/playwright:v1.61.1-jammy

# Set working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Run tests on Chromium only
CMD ["npx", "playwright", "test"]