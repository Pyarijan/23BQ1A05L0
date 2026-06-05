const getPriority = (type) => {
  const priorityMap = {
    placement: 3,
    result: 2,
    event: 1,
  };

  return priorityMap[type] || 0;
};

const getTopNotifications = (notifications, n = 10) => {
  return notifications
    .filter((n) => n.unread)
    .sort((a, b) => {
      const priorityDiff =
        getPriority(b.type) - getPriority(a.type);

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return new Date(b.timestamp) - new Date(a.timestamp);
    })
    .slice(0, n);
};

module.exports = getTopNotifications;