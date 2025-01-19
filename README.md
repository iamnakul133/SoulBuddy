# SoulBuddy - AI-Powered Spiritual Guide

SoulBuddy is an AI-driven platform that generates personalized spiritual guidance through astrology and numerology. The system provides detailed insights, recommendations, and rituals based on user birth details, accompanied by an interactive chatbot for spiritual advice.

---

## Features

### Input:
📝 Users provide the following details:
- **Name**
- **Date of Birth**
- **Time of Birth**
- **Gender**
- **State**
- **City**

### Core Features:
1. 🌐 **Kundali & Horoscope Generation:**
   - Birth chart (Kundali) covering 12 houses.
   - Insights on career, relationships, personal growth, family, and social connections.
   - Daily and monthly horoscopes.

2. 🔮 **AI Recommendations:**
   - Personalized gemstone suggestions.
   - Pooja (ritual) recommendations with explanations of importance and benefits.
   - Do’s and Don’ts based on astrological insights.

3. 🌿 **Spiritual Content Delivery:**
   - Meditation and workout suggestions aligned with horoscope insights.
   - Sleep content tailored to user needs.

4. 🤖 **Chatbot Interaction:**
   - Natural language chatbot for spiritual advice.
   - Quick explanations of recommendations and predictions.

---

## Technology Stack

### Frontend:
- ⚙️ *React*
- 🟣 *TailwindCSS*
- ⚡️ *Vite*

### Backend:
- 🤖 *FastAPI*
- 📂 *DataStax Astra DB* (Cassandra-based database)

### AI Integration:
- 🌌 *Groq Llama-3.1-8b-Instant* for chatbot and insights generation.

### Deployment:
- ☁️ AWS for hosting and deployment.

---

## Installation

### Prerequisites:
- 🔄 *Node.js* and *npm* installed
- 🔧 *Python 3.8+* installed
- 📂 Secure Connect Bundle for DataStax Astra DB
- 🌌 Groq API key and endpoint

### Backend Setup:
1. 📂 Clone the repository:
   ```bash
   git clone https://github.com/your-repo/soulbuddy.git
   cd soulbuddy/backend
   ```

2. 💪 Create a virtual environment and activate it:
   ```bash
   python -m venv env
   source env/bin/activate  # On macOS/Linux
   env\Scripts\activate  # On Windows
   ```

3. 🔄 Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. 📂 Create a `.env` file and add the following:
   ```plaintext
   ASTRA_DB_CLIENT_ID=your_client_id
   ASTRA_DB_CLIENT_SECRET=your_client_secret
   ASTRA_DB_KEYSPACE=your_keyspace
   GROQ_API_KEY=your_groq_api_key
   GROQ_API_ENDPOINT=https://your-groq-endpoint
   APP_TOKEN=<app-token>
   LANGFLOW_ID=<langflow-id>
   FLOW_ID=<flow-id>
   ```

5. 🚀 Run the backend:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup:
1. 👉 Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. 🔄 Install dependencies:
   ```bash
   npm install
   ```

3. 📂 Create a `.env` file in the frontend directory and add any required environment variables if applicable.

4. 🌟 Start the development server:
   ```bash
   npm run dev
   ```

5. 🏠 Build for production:
   ```bash
   npm run build
   ```

6. 🌍 Preview the production build:
   ```bash
   npm run preview
   ```
---

## Testing

### Backend:
1. 🔄 Use Postman or curl to test the API endpoints.
   - Example:
     ```bash
     curl http://localhost:8000
     ```

### Frontend:
1. 🌐 Open http://localhost:3000 in your browser.
2. 💡 Test the user flow by providing input data.

---

## Documentation for Predictions and Recommendations

### Overview
SoulBuddy is an AI-powered spiritual guide that provides personalized horoscope insights, recommendations, and spiritual guidance. This section outlines the logic and basis for predictions and recommendations made by our application.

### Data Sources
1. 🔬 *Astrological APIs:*
   - Trusted sources like FreeAstrologyAPI and Horoscope App-API for planetary positions, zodiac insights, and horoscopes.
2. 🌍 *Geolocation Data:*
   - Geopy and Google Geocoding API to determine latitude, longitude, and timezone.
3. 📝 *User Inputs:*
   - Name, Date of Birth, Time of Birth, Gender, and Location.
4. 📂 *AstraDB Storage:*
   - API results and AI-generated insights are stored in AstraDB for consistency and traceability.
5. 📊 *Real-Time Data Processing:*
   - Ensures users get up-to-date astrological insights.

### Prediction Logic
1. 🌌 *Zodiac-Specific Insights:*
   - Analyzes planetary positions and aspects (e.g., Sun in Leo suggests leadership qualities).
2. 🔮 *Retrograde Planets:*
   - Interprets the impact of retrograde planets (e.g., Mercury retrograde affects communication).

### Recommendation Logic
1. 🔮 *Gemstone Suggestions:*
   - Recommended to enhance planetary strengths (e.g., Emerald for Mercury).
2. 🌟 *Rituals and Practices:*
   - Personalized poojas, fasting, and mantras based on the user’s chart.
3. 🌿 *Meditation and Sleep Guidance:*
   - Aligned with planetary influences (e.g., mindfulness meditation for Moon).


