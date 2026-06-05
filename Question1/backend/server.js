const express = require("express");
const cors = require("cors");

const notifications = require("./notifications");
const getTopNotifications = require("./priorityQueue");

const app = express();

app.use(cors());

const PORT = 5000;

app.get("/notifications", (req, res) => {
  const topNotifications =
    getTopNotifications(notifications);

  res.status(200).json({
    notifications: topNotifications,
  });
});

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});