# 🌐 AI Resume Analyzer & Job Recommender

An AI-powered platform to **analyze resumes** for ATS compatibility and **suggest matching jobs** based on skills.

---

## 🚀 Features

- 📄 Resume parsing (PDF/DOCX)
- ✅ ATS score calculation
- 🧠 Job recommendations (semantic match)
- 📊 Clean dashboard with visuals
- 💡 Resume improvement tips (static)

---

## 🛠 Tech Stack

### 🖥️ Frontend
- **Next.js** + **Tailwind CSS**
- **Chart.js** for score gauges
- **Framer Motion** for animations
- **ShadCN UI** / Chakra UI components

### 🧠 Backend
- **FastAPI (Python)**
- **PyMuPDF**, **docx2txt**, **spaCy** for parsing
- **KeyBERT**, **Sentence Transformers** for AI
- **Pinecone/FAISS** for job matching

### 🗃️ Storage
- **PostgreSQL** – user data, scores
- **AWS S3 / Firebase** – resume files
- **Pinecone/FAISS** – vector storage

### 🔐 Auth & DevOps
- **Auth0 / Firebase Auth**
- **Vercel** (frontend), **Render/Railway** (backend)
- **GitHub Actions**, **Sentry**

---

## ⚙️ Flow
Landing Page ->
Upload Resume ->
Parse + Score + Match ->
Dashboard → Score + Gaps + Jobs

## 🔧 Local Setup

```bash
# Frontend
cd client
npm install && npm run dev

# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

