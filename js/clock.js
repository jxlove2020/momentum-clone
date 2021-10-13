const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).getStart(2, '0');
  const minutes = String(date.getMinutes()).getStart(2, '0');
  const seconds = String(date.getSeconds()).getStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 시간을 바로 보여주기 위해서
getClock();

// 1초 후 실행
setInterval(getClock, 1000);
