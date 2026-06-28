# ZeroTrade 📈
### A Full-Stack Stock Trading Platform

ZeroTrade is a paper trading web application that simulates real-world stock market trading — letting users practice buying and selling stocks risk-free with a virtual portfolio. Built with the MERN stack, it features secure user authentication and an intuitive trading interface.

---

## 🚀 Features

- **Paper Trading** — Simulate stock trades with virtual funds, no real money involved
- **User Authentication** — Secure sign-up, login, and session management
- **Portfolio Dashboard** — Track your holdings, gains, and overall performance
- **Trade History** — View a log of all past buy/sell transactions

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB |

---

## 📂 Project Structure

```
ZeroTrade/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
├── server/          # Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── index.js
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nikitaa104/ZeroTrade-A-stock-trading-platform.git
   cd ZeroTrade-A-stock-trading-platform
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure environment variables**

   Create a `.env` file in the `server/` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the application**

   Start the backend:
   ```bash
   cd server
   npm start
   ```

   Start the frontend (in a new terminal):
   ```bash
   cd client
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Authentication Flow

- Users register with email and password
- Passwords are hashed before storage
- JWT tokens are issued on login and used to protect API routes

---

## 📸 Screenshots

> _Add screenshots of your app here_

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Nikita** — [@Nikitaa104](https://github.com/Nikitaa104)
