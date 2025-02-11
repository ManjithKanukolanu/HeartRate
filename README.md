# HeartRate API

## Project Description
The **HeartRate API** is a Node.js and Express-based application that allows users to register, login, and track patient heart rate data. It uses MongoDB as the database and supports RESTful API endpoints for managing users and patients.

---

## Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/HeartRate.git
cd HeartRate
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root and add the following:
```env
PORT=5003
MongodbUrl=your_mongodb_connection_string
```
Replace `your_mongodb_connection_string` with your actual MongoDB connection URL.

### 4. Start the Server
```bash
npm start
```
The server will start on `http://localhost:5003`.

---

## API Documentation
### **1. User Authentication**
#### **Register User**
- **Endpoint:** `POST /user/register`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### **User Login**
- **Endpoint:** `POST /user/login`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User login successful"
  }
  ```

### **2. Patient Management**
#### **Create Patient**
- **Endpoint:** `POST /patient/create`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "disease": "Hypertension"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Patient created successfully"
  }
  ```

#### **Get Patient Details**
- **Endpoint:** `GET /patient/details?id=patient_id`
- **Response:**
  ```json
  {
    "_id": "12345",
    "name": "John Doe",
    "disease": "Hypertension"
  }
  ```

### **3. Heart Rate Management**
#### **Add Heart Rate**
- **Endpoint:** `POST /patient/heartrate?id=patient_id`
- **Request Body:**
  ```json
  {
    "rate": 72
  }
  ```
- **Response:**
  ```json
  {
    "message": "Heart rate recorded successfully"
  }
  ```

#### **Get Heart Rate Details**
- **Endpoint:** `GET /patient/details/heartrate?id=patient_id`
- **Response:**
  ```json
  {
    "heartrates": [{"_id": "67ab89d77d0a709d140b7bab","rate":88,"recordedAt": "2025-02-11T17:33:11.425Z"}]
  }
  ```

---

## Assumptions & Decisions
- **Authentication:** Basic authentication without password encryption. In production, passwords should be hashed using **bcrypt**.
- **Database:** MongoDB is used as the primary database.
- **Error Handling:** Basic error handling is implemented, but it can be improved for production environments.
- **Environment Variables:** The MongoDB URL and PORT should be configured in `.env`.

---

## Additional Information
- Developed using **Node.js**, **Express.js**, and **MongoDB**.
- Ensure **MongoDB is running** before starting the server.
- API can be tested using **Postman** .

Feel free to contribute to this project! 🚀
