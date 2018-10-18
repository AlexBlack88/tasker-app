export default (tasks, { text, sortBy, status }) => {
  return tasks
    .filter(task => {
      const textMatch = task.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const statusMatch = task.status
        .toLowerCase()
        .includes(status.toLowerCase());
      return textMatch && statusMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "priority") {
        return a.priority < b.priority ? 1 : -1;
      }
    });
};
