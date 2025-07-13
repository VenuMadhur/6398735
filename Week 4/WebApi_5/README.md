
# WebApi_5 - ASP.NET Core Web API with JWT Authentication & Role-Based Authorization

This project demonstrates secure access to Web API endpoints using **JWT authentication**, **role-based authorization**, and **CORS** support. It includes token generation through a dedicated Auth controller and protected access to the Employee controller using `[Authorize]`.

---

## 🧠 Objectives

- Enable CORS for client-to-API access
- Implement **JWT authentication** with bearer token validation
- Add **role-based authorization** using `[Authorize(Roles = "...")]`
- Configure JWT in `Program.cs` using `TokenValidationParameters`
- Create `AuthController` to issue JWT with claims
- Test protected APIs using Swagger & Postman
- Handle expired, missing, and invalid token scenarios

---

## 🗂️ Project Structure

| File                    | Description                                     |
|-------------------------|-------------------------------------------------|
| `Program.cs`            | App configuration, JWT setup, Swagger, CORS     |
| `AuthController.cs`     | Issues JWT token with claims (user + role)      |
| `EmployeeController.cs` | Secured controller requiring valid token & role |
| `WebApi_5.http`         | HTTP request file for testing in IDE            |

---

## ▶️ How to Run

1. **Clone the repository**  
   Open the project in Visual Studio or VS Code.

2. **Run the project**  
   Swagger will launch at:  
```

[https://localhost:7050/swagger](https://localhost:7050/swagger)

````

3. **Install Packages (if needed)**
- `Microsoft.AspNetCore.Authentication.JwtBearer`
- `Swashbuckle.AspNetCore`

---

## 🔐 Authentication Flow

### 1. **Get Token** (Public Endpoint)
- **Endpoint:** `GET /api/Auth`
- **Response:**
```json
{
 "token": "<JWT_TOKEN_HERE>"
}
````

![alt text](Outputs\swagger-auth1.png)

---

### 2. **Authorize Swagger**

Click the **Authorize** button in Swagger UI and paste the token:

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

![alt text](Outputs\swagger-authrize.png)

---

### 3. **Access Protected API: `/api/Employee`**

* Requires role: `Admin` or `POC` (based on `[Authorize(Roles = "Admin,POC")]`)

#### ✅ With valid token:

```json
"Access granted to Employee data."
```

![alt text](Outputs\swagger-employee.png)

#### ❌ Without token:

* Result: `401 Unauthorized`
  ![alt text](Outputs\swagger-empl-401.png)

#### ❌ With expired token:

* Result: `401 Token expired`
  ![alt text](Outputs\swagger-emp-401.png)

#### ❌ With invalid role:

* Result: `403 Forbidden`
  ![alt text](Outputs\swagger-employee-403.png)

---

## 🔑 Token Configuration

Token includes:

```csharp
new Claim(ClaimTypes.Role, role),
new Claim("UserId", userId.ToString())
```

And is signed using:

```csharp
new SymmetricSecurityKey(Encoding.UTF8.GetBytes("mysuperdupersecretkeyforjwt123456"))
```

With settings in `Program.cs`:

```csharp
ValidateIssuer = true,
ValidateAudience = true,
ValidateLifetime = true,
IssuerSigningKey = new SymmetricSecurityKey(...),
ValidIssuer = "mySystem",
ValidAudience = "myUsers"
```

---

## 🧪 Output

### 🟡 Swagger UI Open

![alt text](Outputs\swagger-ui.png)

### 🟢 Valid Token Access

![alt text](Outputs\swagger-employee.png)

### 🔴 Unauthorized - No Token

![alt text](Outputs\swagger-empl-401.png)

### 🔴 Unauthorized - Expired

![alt text](Outputs\swagger-emp-401.png)

### 🔴 Forbidden - Invalid Role

![alt text](Outputs\swagger-employee-403.png)

---

## 📚 Tech Stack

* ASP.NET Core Web API (.NET 6+)
* JWT Bearer Authentication
* Swagger / Swashbuckle
* CORS policy configuration

---
