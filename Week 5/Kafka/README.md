# Kafka Messaging Demo with .NET 6

This is a complete hands-on Kafka messaging system built using ASP.NET Core and Apache Kafka. It includes:

- 🔹 `KafkaProducerDemo` – ASP.NET Core Web API that **produces messages** to Kafka.
- 🔹 `KafkaConsumerDemo` – ASP.NET Core Web API that **consumes messages** from Kafka.

Built as part of **Digital Nurture 4.0 – Deep Skilling (.NET FSE)**.

---

## 🛠 Requirements

- [.NET 6 SDK](https://dotnet.microsoft.com/download)
- [Apache Kafka 3.6+](https://kafka.apache.org/)
- Java 11+ (needed for Kafka)
- Kafka running locally on:
  - 🧠 `localhost:2181` → ZooKeeper
  - 🧠 `localhost:9092` → Kafka broker

---

## 🔧 Kafka Setup Steps (Windows)

1. **Start Zookeeper**  
   ```bash
   cd C:\kafka_2.13-3.6.1\bin\windows
   zookeeper-server-start.bat ..\..\config\zookeeper.properties
   ```
   <img width="940" height="478" alt="image" src="https://github.com/user-attachments/assets/99dcc639-c620-4832-b677-2391cedcb301" />


2. **Start Kafka Broker**

   ```bash
   kafka-server-start.bat ..\..\config\server.properties
   ```
   <img width="940" height="488" alt="image" src="https://github.com/user-attachments/assets/b1728fed-9b0a-4d71-aab0-aeeefd4164f9" />


3. **Create Kafka Topic**

   ```bash
   kafka-topics.bat --create --topic chat-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
   ```
   <img width="940" height="480" alt="image" src="https://github.com/user-attachments/assets/b02d8b93-aea8-4510-9c0e-0efe9984a669" />

---

## 📦 KafkaProducerDemo (Web API)

This app exposes a REST API to send messages to Kafka.

### 🔗 Endpoint:

```
POST /api/Kafka/send
```
<img width="940" height="495" alt="image" src="https://github.com/user-attachments/assets/aa18f117-96eb-4255-b760-f3c807969089" />


### 📥 Sample Request (JSON)

<img width="940" height="495" alt="image" src="https://github.com/user-attachments/assets/814c71f1-07c4-4964-8a79-abdb88ce1b4a" />


### ✅ Output

* Message is published to `chat-topic`
* Response:

  <img width="940" height="494" alt="image" src="https://github.com/user-attachments/assets/e9660be0-21ea-4e91-b4e3-e7463a06fcf8" />


### 🔁 Config (`appsettings.json`)

```json
"Kafka": {
  "BootstrapServers": "localhost:9092",
  "Topic": "chat-topic"
}
```

---

## 📦 KafkaConsumerDemo (Web API)

This app exposes a GET endpoint that consumes messages from Kafka.

### 🔗 Endpoint:

```
GET /api/Consumer/consume
```
<img width="940" height="497" alt="image" src="https://github.com/user-attachments/assets/89eaed9a-8ec1-4335-b1c3-abc7b4cb2968" />


### ✅ Output

* Reads one message from `chat-topic`
* If a message is found:

  ```
  ✅ Received message: kafka ka baap
  ```
  <img width="940" height="485" alt="image" src="https://github.com/user-attachments/assets/d5c27da5-2311-4854-b930-df250909c329" />

  
* If no message found in 5 seconds:

  ```
  ❌ No message received (timeout).
  ```
  ![alt text](Outputs/image.png)

---

## 🧪 Full Workflow

| Step | Action                                        |
| ---- | --------------------------------------------- |
| 1️⃣  | Run Zookeeper + Kafka                         |
| 2️⃣  | Run `KafkaProducerDemo` (`dotnet run`)        |
| 3️⃣  | Open Swagger: `http://localhost:5000/swagger` |
| 4️⃣  | POST a message to `/api/Kafka/send`           |
| 5️⃣  | Run `KafkaConsumerDemo` (`dotnet run`)        |
| 6️⃣  | Call `GET /api/Consumer/consume` from Swagger |
| 7️⃣  | Confirm message received ✅                   |

---

## 📂 Folder Structure

```
KafkaProducerDemo/
├── Controllers/
│   └── KafkaController.cs
├── Models/
│   └── MessageRequest.cs
├── appsettings.json
└── Program.cs

KafkaConsumerDemo/
├── Controllers/
│   └── ConsumerController.cs
├── Program.cs
└── launchSettings.json
```

---

## 🧠 Notes

* Uses **Confluent.Kafka** NuGet package for producer/consumer APIs.
* Simple controller-based APIs with **Swagger UI** for testing.
* Built for **hands-on learning and integration testing**.

---
