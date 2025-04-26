# Mac's Personal Blog Platform

A MERN stack blog platform with a mobile-first design, dark mode support, and admin dashboard.

## Features

- Responsive, mobile-first design
- Dark mode support
- User authentication and authorization
- Admin dashboard for content management
- Blog post creation and management
- Newsletter subscription
- Contact form

## Tech Stack

- **Frontend**: React, React Router, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Setup

1. Clone the repository
2. Install dependencies:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Configure environment variables:

Create a `.env` file in the server directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blog_platform
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
JWT_EXPIRE=30d
```

Create a `.env` file in the client directory:

```
VITE_API_URL=http://localhost:5000
```

4. Run the development servers:

```bash
# Run the backend server
cd server
npm start

# Run the frontend server
cd client
npm run dev
```

The backend server will run on http://localhost:5000 and the frontend server will run on http://localhost:4000.

## Deployment to Render

### Backend Deployment

1. Create a new Web Service in Render
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: blog-platform-api
   - **Environment**: Node
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Environment Variables**:
     - `PORT`: Render sets this automatically
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `JWT_SECRET`: A secure random string
     - `NODE_ENV`: production
     - `JWT_EXPIRE`: 30d

### Frontend Deployment

1. Create a new Static Site in Render
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: blog-platform-frontend
   - **Build Command**: `cd client && npm install && npm run build`
   - **Publish Directory**: `client/dist`
   - **Environment Variables**:
     - `VITE_API_URL`: The URL of your deployed backend API (e.g., https://blog-platform-api.onrender.com)

### Important Security Notes

1. Never commit sensitive information like API keys or database credentials to your repository
2. Use environment variables for all sensitive information
3. Make sure to set a strong JWT_SECRET for production
4. Update your MongoDB Atlas database username and password after deployment

## License

MIT
