function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    let day = now.getDate();
    let month = now.getMonth() + 1; // Month is 0-based
    let year = now.getFullYear();
    let dateString = day + '/' + month + '/' + year;
    let timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').innerHTML = timeString + '<br>' + dateString;
  }
  setInterval(updateClock, 1000);