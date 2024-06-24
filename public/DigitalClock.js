function clock() {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const today = new Date();

  document.getElementById('date').innerHTML = `${dayNames[today.getDay()]} ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  const ampm = h >= 12 ? 'PM' : 'AM';

  // 12-hour format
  let h12 = h % 12;
  h12 = h12 ? h12 : 12; // the hour '0' should be '12'
  h12 = h12 < 10 ? '0' + h12 : h12;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  document.getElementById('hours').innerHTML = h12;
  document.getElementById('min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;
  document.getElementById('ampm').innerHTML = ampm;

  // 24-hour format
  let h24 = h < 10 ? '0' + h : h;
  document.getElementById('hours24').innerHTML = h24;
  document.getElementById('min24').innerHTML = m;
  document.getElementById('sec24').innerHTML = s;
}

// Call the clock function initially and then every second
clock();
setInterval(clock, 1000);
