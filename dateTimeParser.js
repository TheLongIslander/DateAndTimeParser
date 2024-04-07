const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  try {
    const date = parseDateTimeGroup(input);
    console.log(formatDate(date));
  } catch (e) {
    console.error('Error:', e.message);
  }
});

function parseDateTimeGroup(dateTimeGroup) {
  const year = dateTimeGroup.substring(0, 4);
  const month = dateTimeGroup.substring(4, 6);
  const day = dateTimeGroup.substring(6, 8);
  const hour = dateTimeGroup.substring(9, 11);
  const minute = dateTimeGroup.substring(11, 13);
  const second = dateTimeGroup.substring(13, 15);

  if (!isValidDateTimeGroup(year, month, day, hour, minute, second)) {
    throw new Error('Invalid date-time group string');
  }

  return new Date(year, month - 1, day, hour, minute, second);
}
function isValidDateTimeGroup(year, month, day, hour, minute, second) {
  const date = new Date(year, month - 1, day, hour, minute, second);
  // Check for invalid date
  if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day ||
      date.getHours() != hour || date.getMinutes() != minute || date.getSeconds() != second) {
    return false;
  }
  // Additional validation can be added here (e.g., checking for valid ranges)
  return true;
}

function formatDate(date) {
  const dateString = date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const timeString = date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    hour12: true 
  });

  return `${dateString}, at ${timeString}`;
}


module.exports = { parseDateTimeGroup, formatDate };
console.log('Please enter a date-time group:');
