export const formatDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  }); //  Fri, May 10

  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  }); //  12:34 AM

  return `${date} • ${time}`;
};
