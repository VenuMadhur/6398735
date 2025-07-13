
# WebApi_4 - ASP.NET Core Web API: PUT with FromBody

This hands-on project demonstrates how to use `[FromBody]` in a `PUT` method to update an employee in ASP.NET Core Web API. It validates the request, returns appropriate responses, and includes Swagger UI integration for testing.

---

## 🎯 Objectives

- Use `PUT` with `[FromBody]` to update employee data.
- Validate employee `id` and existence.
- Return appropriate status messages.
- Test with Swagger UI and view success/error responses.

---

## 🛠️ Setup Instructions

1. **Build and Run the Project**
   ```bash
   dotnet run
   ````

2. **Open Swagger**

   ```
   https://localhost:7103/swagger
   ```

---

## 🧱 Project Structure

| File                    | Description                             |
| ----------------------- | --------------------------------------- |
| `Program.cs`            | Web application entry point             |
| `EmployeeController.cs` | Controller with `PUT` logic             |
| `Employee.cs`           | Employee model (Id, Name, Dept, Salary) |

---

## 🔧 API Endpoint

### `PUT /api/employee/{id}`

* Updates an employee by ID.
* Requires a valid JSON body.
* Returns:

  * `200 OK` on success
  * `400 Bad Request` if the ID is invalid or not found

---

## 📘 Swagger UI Overview

![alt text](Outputs\swagger ui.png)

---

## 📤 Example Requests & Responses

### ✅ Successful Update

**Input:**

```json
PUT /api/employee/2
{
  "id": 2,
  "name": "Updated Bob",
  "department": "Cloud",
  "salary": 70000
}
```

**Output:**

```json
{
  "id": 2,
  "name": "Updated Bob",
  "department": "Cloud",
  "salary": 70000
}
```

![alt text](Outputs\PUT ui 2.png)

---

### ❌ ID = 0 (Invalid Input)

**Input:**

```json
PUT /api/employee/0
{
  "id": 0,
  "name": "Test",
  "department": "None",
  "salary": 1000
}
```

**Output:**

```
Invalid employee id
```

![alt text](Outputs\PUT ui 0 (1).png)

---

### ❌ ID Not Found (e.g., 99)

**Input:**

```json
PUT /api/employee/99
{
  "id": 99,
  "name": "Ghost",
  "department": "Unknown",
  "salary": 0
}
```

**Output:**

```
Employee not found
```

![alt text](Outputs\PUT ui 99 (1).png)

---

## 🧪 Testing with Swagger

All scenarios above are testable via Swagger interface:

* Fill `id` in the path parameter
* Paste JSON body in the request payload
* Click **Execute**

---

## 🧩 Tech Stack

* ASP.NET Core 6+
* Swagger / Swashbuckle
* JSON Model Binding
* RESTful API Design

---

