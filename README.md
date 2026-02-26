FullStack Sales Dashboard — MERN Stack
A complete Sales Analytics Dashboard built using the MERN Stack.
This project includes interactive charts, CRUD APIs, database seeding, and a professional UI built using React and Chart.js.

📁 Project Structure
/FullStack_Dashboard
│── /frontend   → React dashboard UI
│── /backend    → Node.js, Express, MongoDB API
📝 1. Project Overview

This Sales Dashboard gives insights into:

Total sales data

Monthly & weekly trends

Category-wise revenue

Pie, Bar, Line & Doughnut charts

Interactive and responsive UI

Backend provides REST APIs for fetching data, seeding sample dataset, and managing sales entries.

⚙️ 2. Tech Stack Used
Frontend

React.js

Chart.js

CSS / JSX

Backend

Node.js

Express.js

MongoDB + Mongoose

🔗 3. API Endpoints List (Backend)
Method	Endpoint	Description
GET	/api/sales	Get all sales data
POST	/api/sales	Add new sales record
GET	/api/sales/:id	Get single sale by ID
PUT	/api/sales/:id	Update sale record
DELETE	/api/sales/:id	Delete sale record
🗄️ 4. Database Schema (MongoDB)
Sales Model
{
  itemName: String,
  category: String,
  amount: Number,
  date: Date
}

(Optional: Add more fields based on your project.)

▶️ 5. How to Run the Project Locally
Backend Setup
1️⃣ Navigate to backend folder:
cd backend
2️⃣ Install dependencies:
npm install
3️⃣ Create .env file:
PORT=5000
MONGO_URI=your_mongodb_url
4️⃣ Run backend:
npm start
Frontend Setup
1️⃣ Navigate to frontend folder:
cd frontend
2️⃣ Install dependencies:
npm install
3️⃣ Run frontend:
npm start
🚀 6. Deployment Instructions
Backend Deployment (Render / Railway / Heroku)

Upload backend folder

Add environment variables (MONGO_URI, PORT)

Enable CORS

Set build & start command:

npm install
npm start
Frontend Deployment (Netlify / Vercel)

Build the project:

npm run build

Upload the build/ folder.

💡 Important: Update API base URL from
http://localhost:5000 → Your live backend URL.

🖼️ 7. Dashboard Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bec68b05-3d92-4fb5-94b9-deb5c36282be" />
<img src="https://github.com/user-attachments/assets/bcc68b05-3492-4fb5-94b9-deb5c362882e" alt="Dashboard Screenshot"/>

/screenshots
  - dashboard.png
  - charts.png
  - tables.png

    
👤 Author

Lakshita Goyal
Full-Stack Developer
