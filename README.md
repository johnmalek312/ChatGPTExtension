# ChatGPT Pin Extension

A browser extension that enhances ChatGPT with message pinning functionality.

## Project Structure

```
├── frontend/               # React extension frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API and Firebase services
│   │   ├── hooks/         # Custom React hooks
│   │   └── types/         # TypeScript type definitions
├── backend/               # Python FastAPI backend
│   ├── app/
│   │   ├── routes/       # API endpoints
│   │   ├── models/       # Data models
│   │   └── services/     # Business logic
└── firebase/             # Firebase configuration
```

## Setup Instructions

### Frontend Setup
1. Navigate to `frontend` directory
2. Run `npm install`
3. Run `npm run dev` for development

### Backend Setup
1. Navigate to `backend` directory
2. Create virtual environment: `python -m venv venv`
3. Activate venv: 
   - Windows: `.\venv\Scripts\activate`
   - Unix: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Run server: `uvicorn app.main:app --reload`

### Firebase Setup
1. Create a Firebase project
2. Add your Firebase configuration in `frontend/src/firebase/config.ts`

## Features
- Message pinning
- Quick navigation to pinned messages
- Scalable architecture for future features 