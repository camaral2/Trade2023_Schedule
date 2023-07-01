// Define your API function
function callAPI() {
  // Code to call your API goes here
  console.log('API called');
}

// Define the schedule times (in UTC)
const scheduleTimes = ['08:00:00', '12:00:00', '16:00:00'];

// Calculate the time differences between now and the schedule times
const now = new Date();
const timeDiffs = scheduleTimes.map(time => {
  const [hours, minutes, seconds] = time.split(':');
  const scheduleTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds);
  return scheduleTime.getTime() - now.getTime();
});

// Schedule the API calls
timeDiffs.forEach((diff, index) => {
  if (diff > 0) {
    setTimeout(() => {
      callAPI();
      setInterval(callAPI, 24 * 60 * 60 * 1000); // Repeat every 24 hours
    }, diff);
  }
});

