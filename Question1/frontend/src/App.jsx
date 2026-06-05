import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/notifications"
      );

      setNotifications(
        response.data.notifications
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Priority Inbox</h1>

      {notifications.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.type.toUpperCase()}</h3>

          <p>{item.message}</p>

          <small>
            {new Date(
              item.timestamp
            ).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}

export default App;