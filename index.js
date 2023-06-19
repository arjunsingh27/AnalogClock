function updateclock() {
  var currentTime = new Date();
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();

  var hourHandRotation = (360 / 12) * hour + minute / 2;
  var minuteHandRotation = 6 * minute;
  var secondHandRotation = (360 / 60) * second;

  var hourHand = document.querySelector(".hour");
  var minuteHand = document.querySelector(".minute");
  var secondHand = document.querySelector(".second");

  hourHand.style.transform = `rotate(${hourHandRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandRotation}deg)`;
  secondHand.style.transform = `rotate(${secondHandRotation}deg)`;
}
updateclock();

setInterval(updateclock, 1000);
