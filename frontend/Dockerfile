# Use a lightweight Nginx image
FROM nginx:alpine

# Copy all frontend files to Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

