function startTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();


  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  document.getElementById('hourHand').style.transform = `rotate(${hoursDegrees}deg)`;
  document.getElementById('minuteHand').style.transform = `rotate(${minutesDegrees}deg)`;
  document.getElementById('secondHand').style.transform = `rotate(${secondsDegrees}deg)`;

  
  setTimeout(startTime, 1000);
}