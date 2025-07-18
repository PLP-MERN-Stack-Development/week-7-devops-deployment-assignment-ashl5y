# MERN Stack Deployment Project
This project demonstrates a complete MERN stack application with production deployment setup, CI/CD pipeline, and monitoring.

## Features
<ul>
<li><strong>Authentication:</strong> User registration, login, and protected routes</li>
<li><strong>MongoDB Integration:</strong> Connection to MongoDB Atlas for data storage</li>
<li><strong>Express Backend:</strong> RESTful API with proper error handling and logging</li>
<li><strong>React Frontend:</strong> Modern React application with routing and state management</li>
<li><strong>CI/CD Pipeline:</strong> Automated testing and deployment with GitHub Actions</li>
<li><strong>Production Deployment:</strong> Deployment configuration for both frontend and backend</li>
<li><strong>Monitoring:</strong> Health checks and error tracking</li>
</ul>

### Application Structure
mern-deployment-project/<br>
├── client/                # React frontend<br>
│   ├── src/               # Source files<br>
│   ├── public/            # Static files<br>
│   ├── vite.config.js     # Vite configuration<br>
│   └── package.json       # Frontend dependencies<br>
├── server/                # Express backend<br>
│   ├── src/               # Source files<br>
│   │   ├── config/        # Configuration files<br>
│   │   ├── controllers/   # Route controllers<br>
│   │   ├── middleware/    # Custom middleware<br>
│   │   ├── models/        # Database models<br>
│   │   ├── routes/        # API routes<br>
│   │   ├── tests/         # Test files<br>
│   │   └── utils/         # Utility functions<br>
│   └── package.json       # Backend dependencies<br>
├── .github/               # GitHub Actions workflows<br>
├── deployment/            # Deployment configurations<br>
├── monitoring/            # Monitoring setup files<br>
├── .env.example           # Environment variables template<br>
└── README.md              # Project documentation

## Getting Started
### Prerequisites
1. Node.js (v18 or higher)
2. npm or pnpm
3. MongoDB Atlas account
4. Git

## Local Development Setup
### 1. Clone the repository:

  git clone https://github.com/yourusername/mern-deployment-project.git
  cd mern-deployment-project

### 2. Install dependencies:

  - Install backend dependencies
  cd server
  npm install

  - Install frontend dependencies
  cd ../client
  npm install

### 3. Set up environment variables:

  - Create .env file in server directory<br>
  cp .env.example server/.env<br>
  Edit the .env file with your MongoDB connection string and other settings.

### 4. Run the application:

  - Start the backend
  cd server
  npm run dev

  - Start the frontend in another terminal
  cd client
  npm run dev

## Deployment
### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use the following settings:
  - Build Command: cd server && npm ci && npm run build
  - Start Command: cd server && node dist/index.js
4. Add the environment variables from your .env file
5. Deploy the service

### Frontend Deployment (Vercel)
1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set the following:
  - Framework Preset: Vite
  - Build Command: cd client && npm ci && npm run build
  - Output Directory: client/dist
4. Add the VITE_API_URL environment variable pointing to your backend URL
5. Deploy the project

## CI/CD Pipeline
The project includes GitHub Actions workflows in .github/workflows/:

<strong>mern-ci-cd.yml:</strong> Runs tests, builds the application, and deploys to production on pushes to the main branch.

To set up the CI/CD pipeline:

1. Add the following secrets to your GitHub repository:<br>
  RENDER_API_KEY: Your Render API key<br>
  RENDER_SERVICE_ID: Your Render service ID<br>
  VERCEL_TOKEN: Your Vercel API token<br>
  VERCEL_ORG_ID: Your Vercel organization ID<br>
  VERCEL_PROJECT_ID: Your Vercel project ID<br>
  BACKEND_URL: URL of your deployed backend<br>
  FRONTEND_URL: URL of your deployed frontend

## Monitoring
### Health Checks
The application includes a /api/health endpoint for monitoring the backend status. Use a service like UptimeRobot or StatusCake to set up regular health checks.

### Error Tracking
For error tracking, you can integrate Sentry:

1. Create a Sentry account and project
2. Follow the integration instructions in monitoring/sentry-setup.js
3. Add your Sentry DSN to your environment variables

## Maintenance
### Database Backups
Set up automated MongoDB Atlas backups:

1. Log in to MongoDB Atlas
2. Go to your cluster settings
3. Navigate to “Backup” and enable automated backups

## Regular Updates
1. Set up dependabot in your repository for automatic dependency updates
2. Schedule regular code reviews and updates
3. Monitor for security vulnerabilities

## URLS
- <strong>Frontend:</strong> [https://week7mern.netlify.app/](https://week7mern.netlify.app/)
- <strong>Backend:</strong> [https://week-7-devops-deployment-assignment-nvuo.onrender.com](https://week-7-devops-deployment-assignment-nvuo.onrender.com)
