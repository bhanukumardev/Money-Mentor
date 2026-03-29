# 💰 MoneyMentor

> **Your Personal AI-Powered Finance Assistant for Financial Independence**

[![Economic Times GenAI Hackathon 2026](https://img.shields.io/badge/Economic%20Times-GenAI%20Hackathon%202026-blue)](https://hackathon.economictimes.com)
[![Built with React](https://img.shields.io/badge/Frontend-React%2B%20TypeScript-61dafb?logo=react)]()
[![Backend: Node.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?logo=node.js)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🎯 About MoneyMentor

MoneyMentor is a **full-stack personal finance assistant** designed to help young Indians achieve **FIRE** (Financial Independence, Retire Early). Built for the Economic Times GenAI Hackathon 2026, it combines cutting-edge AI recommendations with intuitive financial planning tools.

### Why MoneyMentor?

✨ **Smart Retirement Planning** - Get a month-by-month roadmap to your FIRE goal  
📊 **AI-Powered Insights** - Personalized investment strategies based on your profile  
🎮 **Interactive Simulators** - Explore how life events affect your financial journey  
🏦 **Tax-Optimized Strategies** - Maximize returns while minimizing tax liability  
💑 **Couple Planning** - Plan joint finances and FIRE goals together  
🎨 **Modern Dark UI** - Beautiful, responsive interface designed for the Indian investor  

---

## ✨ Key Features

### 🚀 FIRE Path Planner
Input your age, income, expenses, savings rate, and risk profile to generate:
- 📈 Month-by-month retirement roadmap
- 💹 Projected portfolio growth with compound interest
- 🎯 Required SIP amounts for target retirement age
- 📊 Multiple scenario analysis

### 📈 Money Score Dashboard
- Real-time financial health assessment
- Spending patterns & savings analytics
- Net worth tracking
- Progress towards FIRE milestone visualization

### 🔮 Life Event Simulator
- Model major expenses (marriage, home purchase, children)
- Career advancement projections
- Inflation impact analysis
- Risk scenario testing

### 💡 Tax & Investment Insights
- Tax-saving investment recommendations
- Allocation strategies (80G, NPS, EPF, PPF)
- Market volatility analysis
- Mutual fund vs. direct equity comparison

### 👥 Couple Planning Module
- Joint financial goal setting
- Coordinated investment planning
- Shared expense tracking
- Dual-income optimization

---

## 🛠️ Tech Stack

### Frontend
- **React 18+** with TypeScript
- **Tailwind CSS** for modern, responsive design
- **Chart.js** & **Recharts** for data visualization
- **Zustand** for state management
- **Axios** for API communication

### Backend
- **Node.js** with Express.js
- **MongoDB** for data persistence
- **Gemini AI API** for intelligent recommendations
- **JWT** for secure authentication
- **Nodemailer** for notifications

### Deployment
- **Vercel** (Frontend)
- **Railway/Render** (Backend)
- **MongoDB Atlas** (Database)

---

## 📦 Installation & Setup

### Prerequisites
```bash
Node.js >= 18.0.0
npm or yarn
Gemini API Key
MongoDB Atlas Account
```

### Clone & Install
```bash
git clone https://github.com/bhanukumardev/Money-Mentor.git
cd Money-Mentor

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Setup

**Backend (.env)**
```
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
```

**Frontend (.env.local)**
```
REACT_APP_API_URL=http://localhost:5000
```

### Run Development Servers
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Usage Guide

### Getting Started
1. Sign up with your email
2. Complete your financial profile (age, income, expenses, risk appetite)
3. Set your FIRE goal (target age or net worth)
4. Explore personalized recommendations

### FIRE Path Analysis
- View your month-by-month progression
- Adjust assumptions (inflation, returns, SIP amount)
- See how changes impact your retirement date
- Export your roadmap as PDF

### Scenario Testing
- Model life events (marriage: +5L/year expenses)
- Career changes (salary increase/job loss)
- Market downturns (bear market simulation)
- See real-time impact on FIRE date

---

## 📊 Project Structure

```
Money-Mentor/
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page routes
│   │   ├── hooks/           # Custom React hooks
│   │   ├── store/           # Zustand state
│   │   ├── api/             # API calls
│   │   └── utils/           # Utility functions
│   └── package.json
├── backend/
│   ├── routes/              # Express routes
│   ├── controllers/         # Business logic
│   ├── models/              # MongoDB schemas
│   ├── middleware/          # Auth, validation
│   ├── services/            # Gemini AI, calculations
│   └── package.json
└── README.md
```

---

## 🤖 AI Features

MoneyMentor leverages **Google Gemini AI** for:
- 🎯 Personalized retirement strategies
- 💬 Natural language financial advice
- 📈 Market trend analysis
- 💡 Tax optimization suggestions
- 🔮 "What-if" scenario recommendations

---

## 🔒 Security & Privacy

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ HTTPS/TLS encryption
- ✅ GDPR-compliant data handling
- ✅ No financial data shared with third parties

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ESLint & Prettier configs
- Write meaningful commit messages
- Add tests for new features
- Update documentation

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

- **GitHub Issues**: [Report bugs here](https://github.com/bhanukumardev/Money-Mentor/issues)
- **Email**: [contact@moneymentor.dev](mailto:contact@moneymentor.dev)
- **Documentation**: [View Full Docs](https://github.com/bhanukumardev/Money-Mentor/wiki)

---

## 🙌 Acknowledgments

- **Economic Times** for hosting the GenAI Hackathon 2026
- **Google Gemini** for AI capabilities
- **KIIT University** for academic support
- **Open Source Community** for amazing libraries

---

## 🎓 Learning & Development

Built with ❤️ by the MoneyMentor team as part of Economic Times GenAI Hackathon 2026.

**Made for young Indians. Built to empower financial freedom.** 🚀

---

<div align="center">

### ⭐ If this project helped you, please give it a star!

[Star the Repository](https://github.com/bhanukumardev/Money-Mentor) • [Report Issues](https://github.com/bhanukumardev/Money-Mentor/issues) • [View Demo](https://money-mentor-zeta.vercel.app/)

</div>
