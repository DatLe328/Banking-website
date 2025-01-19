function searchEngine() {

    let a, i, text;
    let input = document.getElementById('myInput');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("product-list");
    let li = ul.getElementsByTagName('li');
    let cnt = 0;
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      text = a.innerText;
      if (text.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        cnt++;
      } else {
        li[i].style.display = "none";
      }
    }
    
    let alert = document.getElementById('alert');
    if (cnt == 0) {
      alert.style.display = '';
    }
    else {
      alert.style.display = 'none';
    }
  }

$(document).ready(() =>{
  let now = new Date();
  let clock = document.querySelector('.clock-func span');
  function refresh() {
    let hour = now.getHours().toString();
    let minute = now.getMinutes().toString();
    if (hour.length == 1)
      hour = '0' + hour;
    if (minute.length == 1)
      minute = '0' + minute;
    clock.innerText = `${hour}` + ':' + `${minute}`;
  }
  setInterval(refresh, 1000);
})