# AI Bureaucracy Assistance 🏛️🤖

[![Production CI/CD](https://github.com/your-org/ai-bureaucracy-assistant/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/ai-bureaucracy-assistant/actions)
[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python)](https://python.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)

> **A Production-Grade Intelligent Bureaucracy Assistance Platform combining Full-Stack Engineering, Machine Learning, Deep Learning, Document Intelligence, RAG, Robotic Process Automation (RPA), and DevOps.**

---

## 📑 Table of Contents

1. [Product Overview](#-product-overview)
2. [High-Level Architecture](#-high-level-architecture)
3. [Key Features](#-key-features)
4. [Technology Stack](#-technology-stack)
5. [Multi-Device Responsive Design](#-multi-device-responsive-design)
6. [Machine Learning & Document Intelligence Pipeline](#-machine-learning--document-intelligence-pipeline)
7. [Robotic Process Automation (RPA)](#-robotic-process-automation-rpa)
8. [Getting Started (Local Development)](#-getting-started-local-development)
9. [Environment Configuration](#-environment-configuration)
10. [Database Schema & Migrations](#-database-schema--migrations)
11. [REST API Reference](#-rest-api-reference)
12. [Testing & Quality Assurance](#-testing--quality-assurance)
13. [DevOps, Docker & Vercel Deployment](#-devops-docker--vercel-deployment)
14. [Security, Privacy & Compliance](#-security-privacy--compliance)
15. [License](#-license)

---

## 🎯 Product Overview

Government bureaucracy in India involves thousands of services, complex eligibility criteria, varied state portals, and lengthy document checklists. Citizens often face delays due to missing documents or procedural confusion.

**AI Bureaucracy Assistance** bridges this gap by acting as an intelligent, transparent companion for citizens:
- **Search & Discover:** Explore verified procedures for Income Certificates, Passports, Domicile, Voter IDs, Driving Licences, and PAN cards.
- **AI Guidance without Hallucination:** Answers are strictly grounded in official sources with department citations and URLs.
- **Intelligent Document Processing:** Automatic document type detection (Aadhaar, PAN, Income Cert) with OCR and demographic field extraction.
- **Human-in-the-Loop Verification:** Citizens review and confirm extracted values before any form pre-filling.
- **State Machine Workflow Engine:** Rigid state transitions prevent invalid application steps.
- **RPA Automation:** Pre-fills application forms safely without violating portal terms or CAPTCHA restrictions.

---

## 🏗️ High-Level Architecture

```
                               ┌────────────────────────────────┐
                               │             Users              │
                               │ Mobile · Tablet · PC / Desktop │
                               └───────────────┬────────────────┘
                                               │
                                               ▼
                               ┌────────────────────────────────┐
                               │       Next.js 14 Frontend      │
                               │ TypeScript · App Router · CSS  │
                               └───────┬───────────────┬────────┘
                                       │               │
                      REST API / JSON  │               │ Server-Sent Events (SSE)
                                       ▼               ▼
                       ┌────────────────────────────────────────┐
                       │            FastAPI Backend             │
                       │  Authentication (Bcrypt + JWT)         │
                       │  Workflow State Machine Engine         │
                       │  AI Orchestrator & Hallucination Guard │
                       │  Audit Logging & Rate Limiting         │
                       └────┬───────────────┬───────────────┬───┘
                            │               │               │
            ┌───────────────┘               │               └───────────────┐
            ▼                               ▼                               ▼
 ┌──────────────────────┐       ┌───────────────────────┐       ┌──────────────────────┐
 │  PostgreSQL Database │       │    ML / DL Pipeline   │       │      RPA Engine      │
 │  Prisma / SQLAlchemy │       │  TF-IDF + Scikit-Learn│       │  Form Data Extractor │
 │  pgvector Knowledge  │       │  OCR (Tesseract/Plumb)│       │  Workflow Generator  │
 │  Immutable Audit Log │       │  Sentence Transformer │       │  Retry & Backoff     │
 └──────────────────────┘       └───────────────────────┘       └──────────────────────┘
```

---

## ✨ Key Features

### 1. Citizen Dashboard
- Real-time application tracking across state and central services.
- Multi-device synchronized progress: start on PC, continue on phone.
- Document vault with status badges (`PENDING`, `PROCESSING`, `EXTRACTED`, `CONFIRMED`).

### 2. Hallucination-Controlled AI Assistant
- Natural language query routing (Service Lookup, Eligibility Check, Document Help).
- Strict prompt engineering: the AI refuses to invent fees, deadlines, or rules.
- Grounded citations: provides direct links to official departments (`serviceonline.gov.in`, `parivahan.gov.in`).

### 3. Document Intelligence & OCR
- Asynchronous Celery / FastAPI processing pipeline.
- Machine learning classification predicts document category with confidence percentages.
- Regex and NLP extractors pull demographic data (Full Name, Masked ID Number, Date of Birth).
- Interactive verification interface where users inspect and confirm values before proceeding.

### 4. Rigid Process State Machine
- Application states: `DRAFT` ➔ `ELIGIBILITY_CHECK` ➔ `DOCUMENT_COLLECTION` ➔ `DOCUMENT_VALIDATION` ➔ `FORM_PREPARATION` ➔ `USER_REVIEW` ➔ `SUBMITTED` ➔ `IN_PROGRESS` ➔ `COMPLETED`.
- Invalid shortcuts are rejected by server-side transition guards.

### 5. Operator Admin Dashboard
- Complete citizen user management (role promotion, suspension).
- Live ML telemetry: model latency, confidence distributions, and inference counts.
- Immutable audit log viewer recording sensitive events (`USER_LOGIN`, `DOCUMENT_UPLOADED`, `AI_REQUEST`).

---

## 💻 Technology Stack

| Layer | Technologies | Purpose |
|---|---|---|
| **Frontend** | Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide Icons | Responsive UI across mobile, tablet, and PC |
| **Backend** | Python 3.10+, FastAPI, Uvicorn, Pydantic v2 | High-performance asynchronous REST API |
| **Database** | PostgreSQL 16 with pgvector, SQLAlchemy (Async) | Scalable relational storage & vector search |
| **ML / NLP** | Scikit-learn, Tesseract OCR, PDFPlumber, NumPy | Document classification & text parsing |
| **Task Queue** | Celery, Redis | Asynchronous background processing |
| **Security** | Passlib (Bcrypt), Python-Jose (JWT), SlowAPI | Password hashing, token security, rate limits |
| **Testing** | Pytest, Pytest-Asyncio | Automated backend unit and integration tests |
| **DevOps** | Docker, Docker Compose, GitHub Actions, Vercel | Containerization and continuous integration |

---

## 📱 Multi-Device Responsive Design

The platform was built with a mobile-first, multi-device responsive architecture:
- **Mobile (< 640px):** Single-column cards, off-canvas navigation drawer with touch gestures, minimum 44px tap targets, horizontally scrollable data tables.
- **Tablet (641px – 1024px):** Two-column stat grids, compact sidebar, optimized form inputs.
- **Desktop (> 1024px):** Fixed navigation sidebar, rich telemetry charts, multi-column process timeline.

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js 18+ & npm 9+
- Python 3.10+
- PostgreSQL & Redis (or Docker)

### Option A: Running with Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/your-org/ai-bureaucracy-assistant.git
cd ai-bureaucracy-assistant

# Copy environment template
cp .env.example .env

# Build and start all services
docker compose up --build
```
- Frontend: `http://localhost:3000`
- Backend API Docs: `http://localhost:8000/api/docs`

### Option B: Running Services Locally

#### 1. Backend Setup
```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate # On Windows: .\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run database seed
python seed.py

# Start development server
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

#### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install --legacy-peer-deps

# Start Next.js development server
npm run dev
```

---

## 🔒 Default Development Credentials

> ⚠️ **Warning:** Use these credentials for development and testing only.

- **Administrator:** `admin@ai-bureaucracy.dev` / `AdminPass123!`
- **Demo Citizen:** `demo@ai-bureaucracy.dev` / `DemoPass123!`

---

## 📡 REST API Reference

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/v1/auth/register` | Register citizen account | No |
| `POST` | `/api/v1/auth/login` | Login and receive JWT access & refresh tokens | No |
| `GET` | `/api/v1/auth/me` | Fetch active user profile | Bearer Token |
| `GET` | `/api/v1/services` | List verified government services (search/filter) | No |
| `GET` | `/api/v1/services/{id}` | Detailed service eligibility & document rules | No |
| `GET` | `/api/v1/processes` | List citizen's bureaucratic processes | Bearer Token |
| `POST` | `/api/v1/processes` | Initialize new application process | Bearer Token |
| `POST` | `/api/v1/processes/{id}/advance`| Advance process to next verified state | Bearer Token |
| `POST` | `/api/v1/documents/upload` | Upload PDF/image for async OCR & classification | Bearer Token |
| `POST` | `/api/v1/documents/{id}/confirm`| Citizen confirmation of extracted fields | Bearer Token |
| `POST` | `/api/v1/assistant/chat` | AI query routing with grounded source citations | Bearer Token |
| `GET` | `/api/v1/admin/stats` | System metrics (users, processes, AI requests) | Admin Only |
| `GET` | `/api/v1/admin/audit-logs` | Query compliance audit records | Admin Only |

---

## 🛡️ Security, Privacy & Compliance

1. **No Stored Plaintext Secrets:** Passwords hashed with bcrypt; JWT keys configured strictly via environment variables.
2. **Access Control:** User data and uploaded files are isolated per user ID; horizontal privilege escalation is blocked.
3. **Data Minimization:** Extracted Aadhaar numbers are masked; raw sensitive content is excluded from audit logs.
4. **Immutable Audit Trail:** All critical operations record timestamp, IP, action enum, and actor ID into an append-only table.
5. **Rate Limiting:** Protects authentication and AI endpoints from automated abuse.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
