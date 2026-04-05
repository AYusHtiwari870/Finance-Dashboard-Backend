# 💰 Finance Dashboard Backend API

## 📌 Overview

This project is a backend system for a Finance Dashboard that manages users, financial records, and provides summary analytics.

It demonstrates backend development skills including:

* API design
* Role-based access control
* Data modeling
* Authentication (JWT)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)

---

## 🔐 Roles

* **Admin** → Full access (CRUD + users)
* **Analyst** → View records + analytics
* **Viewer** → Read-only access

---

## 📂 Project Structure

src/
├── models/
├── controllers/
├── routes/
├── middleware/

---

## ⚙️ Setup Instructions

1. Clone repo:

```
git clone <your-repo-link>
```

2. Install dependencies:

```
npm install
```

3. Create `.env`:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

4. Run server:

```
npm run dev
```

---

## 🔗 API Endpoints

### 👤 User

* POST `/api/users/register`
* POST `/api/users/login`

### 💰 Records

* POST `/api/records`
* GET `/api/records`
* PUT `/api/records/:id`
* DELETE `/api/records/:id`

### 📊 Dashboard

* GET `/api/dashboard/summary`

---

## 🔑 Authentication

Use token in headers:

```
Authorization: <your_token>
```

---

## 📊 Features

* Role-based access control
* Financial record management
* Dashboard analytics (income, expense, balance)
* Filtering support
* Secure authentication

---

## 🚀 Future Improvements

* Pagination
* Category analytics
* Monthly trends
* Swagger API docs
* Deployment (Render/AWS)

---

## 👨‍💻 Author

Ayush Tiwari
