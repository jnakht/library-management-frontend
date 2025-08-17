# 📚 Library Management System

A **full-stack Library Management System** built with **React, Redux Toolkit, Redux Query, TypeScript, Express.js, and MongoDB**.  
The system allows users to manage books with CRUD operations like add books, view books, update books, delete books, borrow books, and view borrow summaries — with a clean UI and robust backend APIs.

---

## 🔗 Live Links

- **Frontend Live**: [jnakht-library-management-frontend.vercel.app](https://jnakht-library-management-frontend.vercel.app)  
- **Backend Live API**: [jnakht-library-management-backend.vercel.app](https://jnakht-library-management-backend.vercel.app)  
- **Frontend GitHub Repo**: [library-management-frontend](https://github.com/jnakht/library-management-frontend.git)  
- **Backend GitHub Repo**: [l2-assignment-3](https://github.com/jnakht/l2-assignment-3.git)  

---

## 🚀 Features

### ✅ Backend Features
- 📙 **Book Management** – Create, Read, Update, Delete books  
- 📊 **Borrow Books** – Borrow with `bookId`, `quantity`, and `dueDate`  
- 📈 **Borrow Summary** – Aggregated borrowed books data with pagination  
- ⏳ **Pagination** – Available for both books and borrow summary  
- 🧠 **Mongoose Middleware** – Pre & Post hooks for clean logic  
- ⚙️ **Custom Methods** – Static & instance methods for availability control  
- ✅ **Schema Validation** – Ensures data consistency and proper error handling  

### 🎨 Frontend Features
-  **Book Table** – View all books in a responsive table  
-  **Add Book** – Create new books via form  
-  **Edit Book** – Update existing book details  
-  **Delete Book** – Remove books with confirmation  
-  **Borrow Book** – Borrow via form with quantity & due date validation  
-  **Borrow Summary** – Display aggregated borrow report  
-  **Pagination** – Implemented for books and borrow summary  
-  **Responsive UI** – Built with Tailwind CSS, works on mobile/tablet/desktop  


---

## 🛠️ Technologies Used

### Backend
- **Node.js + Express.js**
- **TypeScript**
- **MongoDB + Mongoose**
- `dotenv` – Environment config
- `validator`, `nodemon`, `ts-node-dev`
- **Vercel** – Deployment

### Frontend
- **React + TypeScript**
- **Redux Toolkit + RTK Query**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **React-Hook-Form**
- **Swiper Slider**
- **Material UI**
- **Shadcn UI** (slightly)
- **React Toastify**
- **Vercel** – Deployment

---

## 📦 Backend Models

### Book Model
- **title** (string, required)  
- **author** (string, required)  
- **genre** (string, required; one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY)  
- **isbn** (string, required, unique)  
- **description** (string, optional)  
- **copies** (number, required, ≥0)  
- **available** (boolean, default: true)  

### Borrow Model
- **book** (ObjectId, required, references Book)  
- **quantity** (number, required, >0)  
- **dueDate** (date, required)  

---

## 📦 API Endpoints (Backend)

### Books
- **Create Book** – `POST /api/books`  
- **Get Books (Paginated)** – `GET /api/books?page=1&limit=10`  
- **Get Book by ID** – `GET /api/books/:bookId`  
- **Update Book** – `PUT /api/books/:bookId`  
- **Delete Book** – `DELETE /api/books/:bookId`  

### Borrow
- **Borrow a Book** – `POST /api/borrow`  
- **Borrow Summary (Paginated)** – `GET /api/borrow?page=1&limit=10`  

---

## ⚙️ Business Logic

- Borrowing a book decreases the `copies` count of that book  
- If `copies` reach **0**, the `available` field is set to **false** automatically  
- Pagination ensures efficient data fetching for large datasets  


---

## 🖥️ Frontend Pages

- `/books` – All books list with CRUD + borrow actions  
- `/create-book` – Add a new book  
- `/books/:id` – View book details  
- `/edit-book/:id` – Edit book info  
- `/borrow/:bookId` – Borrow a specific book  
- `/borrow-summary` – Borrowed books summary  

---

## ⚙️ Setup Instructions

### Backend Setup
```bash
# Clone repo
git clone https://github.com/jnakht/l2-assignment-3.git
cd l2-assignment-3

# Install dependencies
npm install

# Setup environment variables
# Create a .env file in the root directory and add:
MONGO_URI=your_mongo_connection_string
PORT=8080

# Run server
npm start


**Frontend Setup**

```bash
# Clone repo
git clone https://github.com/jnakht/library-management-frontend.git
cd library-management-frontend

# Install dependencies
npm install

# Run dev server
npm run dev
```

## 🧪 Testing
-Use Postman, Thunder Client, or any REST client for backend APIs
-Use the live frontend deployment to test UI & API integration
-Example Base URLs:
  -Backend: `https://jnakht-library-management-backend.vercel.app/api`
  -Frontend: `https://jnakht-library-management-frontend.vercel.app`