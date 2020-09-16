export const getDate = (created_at) => {
    const timeStamp = new Date(created_at);
    const date = new Intl.DateTimeFormat('en-US', { weekday: "long", hour: 'numeric', minute: 'numeric', dayPeriod: 'short' });
    return date.format(timeStamp)
  }
