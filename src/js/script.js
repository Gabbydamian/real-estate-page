const countDownDate = new Date("Au 6, 2022 14:52:01").getTime();
let x = setInterval (()=> {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  const DATE = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds left';
  
  document.getElementById("countdown").innerHTML = DATE;
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Auctioned";
  }
}, 1000);