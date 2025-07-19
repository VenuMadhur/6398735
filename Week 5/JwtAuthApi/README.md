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

<img width="940" height="496" alt="image" src="https://github.com/user-attachments/assets/14250acc-256a-4a09-ae99-3516ffe6f529" />


### 1. 🔑 Login

**Endpoint:** `POST /api/Auth/login`
**Body:**

<img width="940" height="495" alt="image" src="https://github.com/user-attachments/assets/01bf20b3-a43c-495a-84e9-2dbbf917136a" />


✅ On success, returns a JWT token.

<img width="940" height="495" alt="image" src="https://github.com/user-attachments/assets/f836833d-7310-44b0-9974-b0ee2d0db686" />


---

### 2. 🔒 Authorize Swagger

Use the "Authorize" button to paste your `Bearer {token}` from the login response.

<img width="940" height="497" alt="image" src="https://github.com/user-attachments/assets/8402e76b-45b4-49d7-8ae8-776b43169588" />


---

### 3. 🛡️ Access Protected Endpoints

#### ✅ Admin Dashboard

**Endpoint:** `GET /api/Admin/dashboard`
**Requires:** Role = `Admin`

<img width="940" height="496" alt="image" src="https://github.com/user-attachments/assets/9bd499a4-6e44-4604-b0cf-59e7a0f8d2a9" />


#### ❌ Admin Access Denied (Token Expired)

<img width="1919" height="1012" alt="image" src="https://github.com/user-attachments/assets/266ce1d7-33f2-45fe-a4c0-df207508b961" />


---

#### ✅ Secure Data (Any Authenticated User)

**Endpoint:** `GET /api/Secure/data`

![alt text](Outputs\swagger-secure.png)

#### ❌ Secure Data - Token Expired

<img width="1919" height="1012" alt="image" src="https://github.com/user-attachments/assets/b225b4ba-62c5-468b-81ee-c3ab14f226ae" />


---

## 📚 Hands-On Covered

✅ JWT Token Generation
✅ `[Authorize]` Decorators
✅ Role-based Authorization
✅ Token Expiry Handling
✅ Swagger UI JWT Integration
✅ All functional outputs verified

---
