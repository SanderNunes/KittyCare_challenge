# KittyCare - Google OAuth Authentication

## 📌 Overview
My challenge was to implements **Google OAuth 2.0 authentication** in the existing KittyCare backend. Users can log in with their Google accounts, and their profile information is displayed upon successful authentication.

## 🚀 Completed asks 
- Google Login using OAuth 2.0
- JWT authentication for user sessions
- Secure token handling with httpOnly cookies
- CORS enabled for frontend-backend communication

## 🛠️ Help yourself run the project
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sandernunes/kittycare-backend.git
cd kittycare-backend
```

### 2️⃣ Install Dependencies
```bash
yarn
```

### 3️⃣ Set Up Environment Variables
Create a **.env** file in the root directory and add the following:
```
SUPABASE_URL=https://bfdyxkieasigvmcmbymp.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmZHl4a2llYXNpZ3ZtY21ieW1wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDk0OTA0MiwiZXhwIjoyMDQ2NTI1MDQyfQ.QIwPwC3ex2B5inzQDQy-QZWHPtrXaItc9dqPsPskGz0

JWT_SECRET=pC96SELjX0PlT+cHc+6UnSs5/OtSsYJGavPfRiT7b7EiXF/IlOgpcBhz83/NOrbk5CbueQZ6zss2YiYIal0qzA==

OPENAI_API_KEY=sk-i635BPzvdI20FYqx2jjLmy9X4dPpr7roOMNzW0dvdrT3BlbkFJ8820FSmm37-PgbdbFPfQzhphokz1Uccx17pxMQOY0A

STRIPE_SECRET_KEY=sk_test_51PyczFLgFSikZxwjjilfAawpMDfL3lv1SX8KznqEkFLxFk03RZw9V2xobZSwtDBVKZDM3XOtm5pmOm8ezC4DUnGb00EB7iNc3A

CLIENT_URL=http://localhost:5173

SMTP_HOST=smtp.gmail.com
SMTP_USERNAME=noreply@kittycareapp.com
SMTP_PASSWORD=zwbq qqza djqs iuql

KLAVIYO_API_KEY=pk_fe5b04ebeb88c92f320b1be3f168a038ae

PAYPAL_CLIENT_ID=AXK1Xg1l-VY1NDBvtqfL_LUm67tz-5C48-gfl6OC05C2gwz3DC3HPlgVjkgHbo5yMdW1bWkv3ik-xMnN
PAYPAL_SECRET_KEY=EAZG_rhIF2BaOu-ZdDkgRx4HT8vcgC_ZmMsp49TGsr2xezteUbBILYgQKvSZ9G9pTTviFbkcc69FnHdw
# PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com/v1
PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com/v1
PAYPAL_MONTHLY_PLAN_ID=P-35577034JV1828811M53RRXY
# Google and JWT
GOOGLE_CLIENT_ID=507860702777-s09dmlrfm64p45uqv2h9slkmh9epe86k.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
```

### 4️⃣ Run the Server
```bash
yarn run dev
```
The server will start on `http://localhost:3000/`

## 🔄 Oauth Endpoints
### ➤ **Google OAuth Login**
**Endpoint:** `POST /api/oauth/google`
- **Request Body:**
  ```json
  { "token": "google_id_token" }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token",
    "user": {
      "userId": "user_email",
      "email": "user_email",
      "full_name": "user_name",
      "picture": "profile_picture_url"
    }
  }
  ```


## 🔥 Authentication Flow
1. **Login with Google** on the frontend.
2. **Check the response** in the browser console (`token`, `user` details).

## ✅ Security Considerations
- **CORS Policy:** Allows only `http://localhost:5173` (update for production).
- **JWT Storage:** Tokens can be stored in `httpOnly` cookies for enhanced security.
- **Token Expiry:** JWT expires in 1 hour (`expiresIn: "1h"`).

## 📂 Folders/Files Edited
```
📦 kittycare-backend
 ┣ 📂 src
 ┃ ┣ 📂 controllers
 ┃ ┃ ┗ 📜 oauthController.js
 ┃ ┣ 📂 routes
 ┃ ┃ ┗ 📜 oauthRoutes.js
 ┃ ┣ 📂 middleware
 ┃ ┃ ┗ 📜 authMiddleware.js
 ┃ ┗ 📜 server.js
 ┣ 📜 .env.example
 ┣ 📜 package.json
 ┣ 📜 README.md
```
---

Great challenge by the way! 🚀
