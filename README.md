# Google GDG solutions Challemge - 2025
# 💰 FinBudd - A Financial Investment Advisor and Planner
---

### Team Name: Chiti d robo

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

#### 2️⃣ Navigate to the frontend directory

```bash
cd ../frontend
```

#### 3️⃣ Initialize Node package (if not already done)

```bash
npm init -y
```

#### 4️⃣ Install frontend dependencies

```bash
npm install
```

#### 5️⃣ Start the frontend development server

```bash
npm run dev
```

The app will typically run at: [http://localhost:5173/](http://localhost:5173/)

---

## 🧠 Features

- Chat with your financial documents
- Supports PDFs, TXTs, and CSVs
- Secure and private local vector storage
- Fast semantic search and contextual understanding
- AI-powered answers using Google Gemini

---

## Team Members 🤝
[Sujit T K](https://github.com/sujit-t-k)
[Tejeswar](https://github.com/Tejes123)
[Arvindh]()
[Sriram]()


## 📌 Notes

- Ensure your `.env` file is **not committed** to version control.
- FAISS may require some system-level dependencies depending on your platform.
- Test with sample financial documents to evaluate performance.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

MIT License. Feel free to use and modify.

---

Made with ❤️ by Tejeswar


