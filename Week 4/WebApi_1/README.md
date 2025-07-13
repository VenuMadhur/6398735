
# WebApi_1 - ASP.NET Core Web API Hands-On

This hands-on project demonstrates how to build a simple **RESTful Web API** using **ASP.NET Core**. It includes practical implementation of HTTP verbs, status codes, and controller-based routing for managing student records.

---

## 🧠 Objectives

- Understand REST architecture and Web API fundamentals
- Learn about HTTP Verbs (`GET`, `POST`, `PUT`, `DELETE`) and their usage
- Handle HTTP status codes (`200 OK`, `201 Created`, `400 Bad Request`, etc.)
- Implement CRUD operations using controllers
- Test and document APIs with **Swagger** and **Postman**

---

## 🗂️ Project Structure

| File                           | Purpose                                  |
|--------------------------------|------------------------------------------|
| `Program.cs`                   | Entry point and middleware configuration |
| `StudentController.cs`         | Student CRUD API                         |
| `WeatherForecastController.cs` | Sample template API                      |
| `WeatherForecast.cs`           | Weather model used in sample             |

---

## ▶️ How to Run

1. **Clone the repository**  
   ```bash
   git clone <your-repo-url>
   cd WebApi_1
   ````

2. **Build and Run**
   Using CLI:

   ```bash
   dotnet run
   ```

   Or open in Visual Studio and hit **Run**

3. **Access Swagger UI**
   Open: [https://localhost:7026/swagger](https://localhost:7026/swagger)

---

## 🔄 CRUD API Endpoints (Student)

| Verb   | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/student`      | Get all students     |
| GET    | `/api/student/{id}` | Get student by ID    |
| POST   | `/api/student`      | Add new student      |
| PUT    | `/api/student/{id}` | Update student by ID |
| DELETE | `/api/student/{id}` | Delete student by ID |

---

## 🧪 Sample Outputs (Postman)

### ✅ GET All Students

![alt text](Outputs\get.png)

---

### ✅ GET Student by ID

![alt text](Outputs\get1.png)

---

### ➕ POST (Add Student)

```json
{
  "name": "David"
}
```

Response:

```json
{
  "id": 4,
  "name": "David"
}
```

![alt text](Outputs\post.png)

---

### 🖊️ PUT (Update Student)

```json
{
  "name": "Bobby"
}
```

![alt text](Outputs\put.png)

---

### ❌ DELETE Student

![alt text](Outputs\delete.png)

---

## 📚 Swagger UI Preview

This project integrates **Swagger/OpenAPI** for visual API documentation and testing.

![alt text](Outputs\swaggerUI.png)

---

## 📄 Status Code Examples

| Code | Meaning     |
| ---- | ----------- |
| 200  | OK          |
| 201  | Created     |
| 400  | Bad Request |
| 404  | Not Found   |

---

## 🧩 Tech Stack

* ASP.NET Core Web API
* C#
* Swagger
* Postman (for testing)

---



