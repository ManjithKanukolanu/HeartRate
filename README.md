HeartRate API
Project Description

The HeartRate API is a Node.js and Express-based application that allows users to register, login, and track patient heart rate data. It uses MongoDB as the database and supports RESTful API endpoints for managing users and patients.
Setup Instructions
1. Clone the Repository
    git clone https://github.com/yourusername/HeartRate.git
    cd HeartRate
2. Install Dependencies
    npm install
3. Configure Environment Variables
   Create a .env file in the project root and add the following:
   PORT=5003
   MongodbUrl=your_mongodb_connection_string
4. Start the Server
   npm start
   The server will start on http://localhost:5003.
API Documentation
  1.Register User
  Endpoint: POST /user/register
    Request Body:
   {
   "email": "user@example.com",
   "password": "password123"
  }
  Response:
 {
  "message": "User registered successfully"
 }
2.User Login
Endpoint: POST /user/login
Request Body:
{
  "email": "user@example.com",
  "password": "password123"
}
Response:
{
  "message": "User login successful"
}

3. Patient Management

Create Patient

Endpoint: POST /patient/create

Request Body:

{
  "name": "John Doe",
  "disease": "Hypertension"
}

Response:

{
  "message": "Patient created successfully"
}

Get Patient Details

Endpoint: GET /patient/details?id=patient_id

Response:

{
  "_id": "12345",
  "name": "John Doe",
  "disease": "Hypertension"
}

3. Heart Rate Management

Add Heart Rate

Endpoint: POST /patient/heartrate?id=patient_id

Request Body:

{
  "rate": 72
}

Response:

{
  "message": "Heart rate recorded successfully"
}

Get Heart Rate Details

Endpoint: GET /patient/details/heartrate?id=patient_id

Response:

{
  "heartrates": [{"rate":"72","recordedAt":"2025-02-11T17:33:11.425+00:00"}]
}
