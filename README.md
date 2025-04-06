# Google GDG solutions Challemge - 2025
### Team Name: Chiti d robo

---

# 💰 FinBudd - A Financial Investment Advisor and Planner

FinBudd is an intelligent financial advisor that helps users plan and optimize investments using Generative AI. It supports analyzing financial documents (PDFs, TXTs, CSVs), extracting meaningful insights, and answering user queries using natural language.

---

## 🚀 Technologies Used

- **Frontend**: Vite + React  
- **Backend**: Flask (Python 3.10 recommended)  
- **Vector Database**: FAISS  
- **Embedding Model**: HuggingFace BGE Embedding Model  
- **LLM Inference**: Gemini API  

---

## ⚙️ How to Run the Application

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd FinBudd
```

---

### 2. Backend Setup (Flask + FAISS + Gemini API)

#### 1️⃣ Create Python virtual environment (Python 3.10 recommended)

```bash
python -m venv your-venv-name
```

#### 2️⃣ Activate the virtual environment

```bash
cd backend
your-venv-name\Scripts\activate  # On Windows
# source your-venv-name/bin/activate  # On Mac/Linux
```

#### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

#### 4️⃣ Create a `.env` file inside the `backend` directory and add your Gemini API key:

```
GEMINI_API_KEY=your-gemini-api-key
```

#### 5️⃣ Allow loading serialized FAISS vectors

Make sure the following line exists in `faiss.py`:

```python
allow_dangerous_deserialization = True
```

#### 6️⃣ Ingest and embed financial documents (PDFs, TXTs, CSVs)

```bash
python ingestDocuments.py
```

This will create a FAISS vector database in the local directory.

#### 7️⃣ Start the backend server

```bash
python server.py
```

---

### 3. Frontend Setup (Vite + React)

#### 1️⃣ Install Node.js from the official website  
👉 [Download Node.js](https://nodejs.org/en)

#### 2️⃣ Navigate to th
