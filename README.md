# Forge40 Coaching & Longevity Web Application

This repository contains the complete scaffolding and full high-converting landing page for **Forge40**—an AI-assisted strength and longevity coaching system designed for busy adults aged 40+ who want to build sustainable strength, prevent injury, and optimize their healthspan.

## Directory Structure

```
/code
  ├── README.md             # This document
  ├── package.json          # Root orchestration package.json
  ├── frontend/             # Vite + React + Tailwind CSS v4 frontend
  │     ├── dist/           # Built static production-ready website assets
  │     ├── src/            # React source code components
  │     │     ├── App.jsx   # Beautiful, interactive responsive landing page
  │     │     ├── main.jsx  # Frontend entry point
  │     │     └── index.css # Tailwind directive import
  │     ├── index.html      # Main HTML layout
  │     └── vite.config.js  # Vite config using @tailwindcss/vite plugin
  └── backend/              # Express + Node.js + SQLite local backend
        ├── server.js       # Express server hosting port 3000, serving /frontend/dist
        ├── database.sqlite # Local SQLite database storage
        └── package.json    # Backend configuration & script definitions
```

## Stack Details

1. **Frontend:**
   - **Vite + React:** Extremely fast, lightweight, and memory-efficient frontend bundler.
   - **Tailwind CSS v4:** Modern CSS framework integrated natively into Vite using the new `@tailwindcss/vite` compiler plugin, requiring no config files and yielding incredibly tiny CSS bundles.
   - **Interactive State Features:**
     - *Interactive Assessment Teaser Quiz:* A 3-step physical scoring widget that drives users to complete their longevity analysis, prompting paid actions.
     - *Forge40 AI Coach Chat Demo:* A real-time conversational simulation showing off the unlimited AI chatbot included in the Membership tier.
     - *FAQ Accordion:* Expands and collapses top user objections to increase engagement.
     - *Pricing billing switcher:* Easily alternates between monthly ($29) and annual ($199) subscription terms with clear discount tracking.

2. **Backend:**
   - **Node/Express:** Serve frontend static files from `/frontend/dist` and proxy all client routes securely.
   - **SQLite:** A local, fast, file-based database `/backend/database.sqlite` containing:
     - `newsletter_subscribers` - capturing high-intent email leads.
     - `assessment_completions` - records longevity markers and scores for analytics.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation & Build

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sacredsound/Forge40.git
   cd Forge40
   ```

2. **Install frontend dependencies and build:**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

3. **Install backend dependencies:**
   ```bash
   cd ../backend
   npm install
   ```

### Running the App

To run the web application in production mode:
```bash
cd backend
npm start
```
The application will start listening on port `3000` bound to `0.0.0.0`, making it available publicly at the team's public URL!

For local background execution (to persist after exiting terminal):
```bash
nohup npm start > /tmp/forge40-backend.log 2>&1 &
```
You can view active connection states using:
```bash
ss -Htln | grep :3000
```
And check server console logs at `/tmp/forge40-backend.log`.
