# 💬 Real-time Chat Application

A full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.io for real-time communication.

## 🚀 Features

- 🔐 User authentication (Signup/Login)
- 💬 Real-time messaging
- 👥 Online/Offline user status
- 📱 Responsive design
- 🌙 Dark/Light theme support
- 🖼️ Image sharing in chats

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Zustand
- **Backend**: Node.js, Express.js, MongoDB, Socket.io
- **Authentication**: JWT
- **Storage**: Cloudinary (for images)

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB
- Cloudinary account (for image uploads)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the values with your configuration

4. Start the development server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5001`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## ⚙️ Environment Variables

### Backend (`.env` file in `/backend`)

```env
# Server Configuration
PORT=5001
NODE_ENV=development

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 📁 Project Structure

```
chatapp/
│
├── backend/                    # Backend source code
│   ├── src/
│   │   ├── config/            # Configuration files
│   │   ├── controllers/       # Route controllers
│   │   ├── lib/               # Utility libraries
│   │   ├── middleware/        # Express middlewares
│   │   ├── models/            # Database models
│   │   ├── routes/            # API routes
│   │   ├── index.js           # App entry point
│   │   └── socket.js          # Socket.io configuration
│   ├── .env.example           # Environment variables example
│   └── package.json
│
├── frontend/                  # Frontend source code
│   ├── public/                # Static files
│   └── src/
│       ├── components/        # Reusable UI components
│       ├── constants/         # App constants
│       ├── lib/               # Utility functions
│       ├── pages/             # Page components
│       ├── store/             # State management
│       ├── App.jsx            # Main App component
│       └── main.jsx           # Entry point
│
├── .gitignore
├── README.md
└── package.json
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.