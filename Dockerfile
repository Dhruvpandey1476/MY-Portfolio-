FROM python:3.12-slim

WORKDIR /app

# Install Node.js for React build
RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*

# Copy everything
COPY . .

# Build React
WORKDIR /app/react-portfolio
RUN npm install && npm run build
RUN mkdir -p /app/chatbot-backend/dist && cp -r dist/* /app/chatbot-backend/dist/

# Install Python deps
WORKDIR /app/chatbot-backend
RUN pip install --no-cache-dir -r requirements.txt

# Expose port
EXPOSE 8000

# Mount static files and run
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]