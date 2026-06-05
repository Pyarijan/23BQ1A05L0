# Stage 1 - Priority Inbox Notification System Design

## Problem Statement

The objective of this task is to design and implement a Priority Inbox system for a campus notifications application. Since users receive a large number of notifications, important unread notifications should always appear first.

The system must display the top 10 unread notifications based on:

1. Priority Weight
2. Recency (latest notifications first)

Priority order:

```text
Placement > Result > Event
```

---

## Approach Used

To solve this problem, a notification prioritization system was implemented using:

* **Frontend:** React.js
* **Backend:** Node.js + Express.js
* **Communication:** REST API

The backend stores notifications and calculates the top priority unread notifications.

The frontend fetches notifications through an API and displays them in a clean user interface.

---

## Priority Calculation Logic

Each notification type is assigned a priority weight:

| Notification Type | Priority Weight |
| ----------------- | --------------- |
| Placement         | 3               |
| Result            | 2               |
| Event             | 1               |

The system first compares notification priority.

Example:

* Placement notifications are shown before Result notifications.
* Result notifications are shown before Event notifications.

If two notifications have the same priority, the latest notification (most recent timestamp) is displayed first.

---

## Algorithm Used

The following steps are performed:

### Step 1: Filter Unread Notifications

Only unread notifications are considered.

### Step 2: Sort Notifications

Notifications are sorted using:

1. Priority weight
2. Timestamp (latest first)

### Step 3: Return Top 10

After sorting, only the first 10 notifications are returned.

---

## Efficient Maintenance of Top 10 Notifications

Since new notifications continuously arrive, the system recalculates priority dynamically whenever notifications are requested.

Current approach:

* Filter unread notifications
* Sort by priority and timestamp
* Return top 10 notifications

Time Complexity:

```text
O(n log n)
```

Where:

* `n` = number of notifications

### Optimization for Large Scale Systems

For larger systems with thousands of notifications, a **Min Heap (Priority Queue)** can be used.

Benefits:

* Faster insertion of new notifications
* Efficient maintenance of top 10 notifications
* Better scalability

Optimized Complexity:

```text
O(log n)
```

for insertion.

---

## API Endpoint

The backend exposes the following endpoint:

```text
GET /notifications
```

This endpoint returns the top 10 unread prioritized notifications.

---

## Folder Structure

```text
23BQ1A05L0/
│
├── Question1/
│   ├── backend/
│   ├── frontend/
│   ├── screenshots/
│   ├── Notification_System_Design.md
│   └── README.md
```

---

## Conclusion

The Priority Inbox system successfully prioritizes unread notifications based on notification importance and recency. The solution is scalable, maintainable, and fulfills all Stage 1 requirements.
