$(document).ready(() => {
  fetch("../data.json").then(res => res.json()).then(data => {
  
      // NẠP SLIDE
      let img = document.getElementById('list');
      let dots = document.querySelector('.dots');
      let i = 0;
      for (let li of data.slideImg) {
        i++;
        let item = document.createElement('div');
        item.classList.add('item');
        let liSrc = '../' + li.src;
        item.innerHTML = `
          <img src="${liSrc}" alt="Home${li.id}">
        `
        img.appendChild(item);
      }
      while (i--) {
        let li = document.createElement('li');
        dots.appendChild(li);
      }
      let li = dots.getElementsByTagName('li');
      li[0].classList.add('active');
    })

  // SLIDE SHOW
  setTimeout(() => {
    let slider = document.getElementById('list');
    let items = document.querySelectorAll('.item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.dots li');

    let lengthItems = items.length - 1;
    let active = 0;
    next.onclick = function(){
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }
    let refreshInterval = setInterval(()=> {next.click()}, 3000);
    function reloadSlider(){
        slider.style.left = -items[active].offsetLeft + 'px';

        let last_active_dot = document.querySelector('li.active');
        last_active_dot.classList.remove('active');
        dots[active].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(()=> {next.click()}, 3000);

        
    }
    dots.forEach((li, key) => {
        li.addEventListener('click', ()=>{
            active = key;
            reloadSlider();
        })
    })
  }, 1000);
})