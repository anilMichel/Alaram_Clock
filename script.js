function setAlarm() {
  const alarmTimeInput = document.getElementById('alarmTime');
  const alarmTime = alarmTimeInput.value;

  if (alarmTime === '') {
    alert('Please set the alarm time.');
    return;
  }

  const now = new Date();

  const [alarmHours, alarmMinutes] = alarmTime.split(':').map(Number);

  let alarmDateTime = new Date();
  alarmDateTime.setHours(alarmHours, alarmMinutes, 0, 0);

  if (alarmDateTime < now) {
    alarmDateTime.setDate(alarmDateTime.getDate() + 1); // set alarm for the next day
  }

  const timeDifference = alarmDateTime - now;

  setTimeout(() => {
    playAlarm();
  }, timeDifference);
}

function playAlarm() {
  alert('Time to wake up!');
  // You can replace the alert with an actual sound play logic using HTML5 Audio.
}
