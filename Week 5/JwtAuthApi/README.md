# 🔐 JWT Authentication API with ASP.NET Core

This project demonstrates how to implement **JWT-based Authentication and Authorization** in ASP.NET Core Web API. It includes:

* Login with JWT token generation
* Role-based access control
* Secured endpoints with `[Authorize]`
* Swagger UI support for JWT Bearer token
* Expired token handling

---

## 📁 Project Structure

```
JwtAuthApi/
│
├── Controllers/
│   ├── AuthController.cs       # Handles login and token generation
│   ├── AdminController.cs      # Admin-only endpoint (requires "Admin" role)
│   └── SecureController.cs     # General protected endpoint (any valid user)
│
├── Models/
│   └── LoginModel.cs
│
├── Program.cs                  # Configures JWT authentication and Swagger
├── appsettings.json            # JWT settings
```

---

## 🔧 Configuration

### `appsettings.json`

```json
{
  "Jwt": {
    "Key": "ThisIsMyUltraSecureKey_1234567890",
    "Issuer": "MyAuthServer",
    "Audience": "MyApiUsers",
    "DurationInMinutes": 0.05
  }
}
```

---

## 🔐 Authentication Flow

![alt text](Outputs\swagger-ui.png)

### 1. 🔑 Login

**Endpoint:** `POST /api/Auth/login`
**Body:**

![alt text](Outputs\swagger-auth.png)

✅ On success, returns a JWT token.

![alt text](Outputs\swagger-auth-1.png)

---

### 2. 🔒 Authorize Swagger

Use the "Authorize" button to paste your `Bearer {token}` from the login response.

![alt text](Outputs\swagger-authorize.png)

---

### 3. 🛡️ Access Protected Endpoints

#### ✅ Admin Dashboard

**Endpoint:** `GET /api/Admin/dashboard`
**Requires:** Role = `Admin`

![alt text](Outputs\swagger-admin.png)

#### ❌ Admin Access Denied (Token Expired)

![alt text](Outputs\swagger-admin-401.png)

---

#### ✅ Secure Data (Any Authenticated User)

**Endpoint:** `GET /api/Secure/data`

![alt text](Outputs\swagger-secure.png)

#### ❌ Secure Data - Token Expired

![alt text](Outputs\swagger-secure-401.png)

---

## 🧪 API Endpoints

| Endpoint               | Method | Auth Required  | Role  |
| ---------------------- | ------ | -------------- | ----- |
| `/api/Auth/login`      | POST   | ❌             | —     |
| `/api/Secure/data`     | GET    | ✅             | Any   |
| `/api/Admin/dashboard` | GET    | ✅             | Admin |

---

## 📚 Hands-On Covered

✅ JWT Token Generation
✅ `[Authorize]` Decorators
✅ Role-based Authorization
✅ Token Expiry Handling
✅ Swagger UI JWT Integration
✅ All functional outputs verified

---
