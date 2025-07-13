
# WebApi_3 - ASP.NET Core Web API with Custom Filters

This hands-on project demonstrates how to build an ASP.NET Core Web API with **custom filters**, including:

- A **Custom Authorization Filter** to validate request headers
- A **Custom Exception Filter** to globally catch exceptions and log them
- Full **Swagger integration**
- Model-based JSON input/output via Postman

---

## 🎯 Objectives

- Use `[FromBody]` for model binding JSON in POST/PUT
- Implement custom filters using `ActionFilterAttribute` and `IExceptionFilter`
- Automatically log exceptions to a file
- Enforce request header validation (e.g., Authorization token)
- Swagger UI + Postman for testing and verification

---

## 🛠️ Setup Instructions

1. **Install NuGet Package**
```

Microsoft.AspNetCore.Mvc.WebApiCompatShim

````

2. **Build & Run**
```bash
dotnet run
````

3. **Visit Swagger**

   ```
   https://localhost:[port]/swagger
   ```

---

## 🧩 Features

### ✅ Custom Authorization Filter

* Checks for `Authorization` header
* Validates it contains `"Bearer"` keyword
* Returns 400 Bad Request if missing or invalid

### ❗ Custom Exception Filter

* Catches exceptions globally
* Logs errors to a text file (`logs.txt`)
* Returns `500 Internal Server Error` response

---

## 📁 Project Structure

| File / Folder                          | Purpose                                              |
| -------------------------------------- | ---------------------------------------------------- |
| `Program.cs`                           | Setup filters and Swagger                            |
| `Filters/CustomAuthorizationFilter.cs` | Checks headers                                       |
| `Filters/CustomExceptionFilter.cs`     | Logs exceptions                                      |
| `EmployeeController.cs`                | Contains GET/POST/PUT actions using `Employee` model |
| `Models/Employee.cs`                   | Main entity                                          |
| `Models/Department.cs`, `Skill.cs`     | Related nested entities                              |

---

## 📄 API Endpoints

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | `/api/employee` | Get list of employees |
| POST   | `/api/employee` | Add an employee       |
| PUT    | `/api/employee` | Update employee info  |

---

## 🧪 Sample Outputs

### ➕ POST - Add Employee

**Request Body**

```json
{
  "id": 1,
  "name": "Jane",
  "salary": 60000,
  "permanent": true,
  "department": { "id": 2, "name": "IT" },
  "skills": [
    { "id": 1, "name": "C#" },
    { "id": 2, "name": "SQL" }
  ],
  "dateOfBirth": "1990-05-01"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "Jane",
  "salary": 60000,
  "permanent": true,
  ...
}
```

![alt text](Outputs\POST.png)

---

### 🔐 GET - Without Authorization Header

Returns:

```json
"Invalid request - No Auth token"
```

### 🔐 GET - Invalid Authorization Value

Returns:

```json
"Invalid request - Token present but Bearer unavailable"
```

---

### ⚠️ Exception Handling (GET with simulated error)

* Exception thrown intentionally
* Logged in: `logs.txt`

```
[11-07-2025 22:20:36] Testing exception filter 🔥
```

![alt text](Outputs\logs.png)

---

### 🧾 POST - Success Case

![alt text](Outputs\POST1.png)

---
