$(document).ready(function(){
  // LOAD

  fetch("data.json").then(res => res.json()).then(data => {
    // NẠP SẢN PHẨM NỔI BẬT
    let products = document.getElementById('products');
    for (let li of data.product) {
      let product = document.createElement('div');
      product.classList.add('product');
      product.innerHTML = `
        <img src="${li.src}" alt="">
        <p class="product-heading bold">${li.title}</p>
        <p class="product-cap">
            ${li.description}
        </p>
        <div class="detail-box">
            <a href="Onbuild/onbuild.html" class="detail bold">XEM CHI TIẾT</a>
        </div>
      `
      products.appendChild(product);
    }

    // NẠP SLIDE
    let img = document.getElementById('list');
    let dots = document.querySelector('.dots');
    let i = 0;
    for (let li of data.slideImg) {
      i++;
      let item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `
        <img src="${li.src}" alt="Home${li.id}">
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

  //PRODUCTS SLIDER
  setTimeout(() => {
    let slider = document.getElementById('products');
    let prev = document.getElementById('products-prev');
    let next = document.getElementById('products-next');
    let items = document.getElementsByClassName('product');

    let lengthItems = items.length - 1;
    let active = 0;
    next.onclick = () => {
      (active + 1 > lengthItems - 2) ? active = 0 : active++;
      reloadSlider()
    }
    
    prev.onclick = () => {
      (active - 1 < 0) ? active = lengthItems - 2 : active--;
      reloadSlider();
    }
    let refreshInterval = setInterval(()=> {next.click()}, 3000);
    function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + 'px';
      clearInterval(refreshInterval);
      refreshInterval = setInterval(()=> {next.click()}, 3000);
    }
  }, 1500);

  // HOMEFIXED------------------------------------
  $(window).scroll(() => {
      if ($(window).scrollTop() > 50) {
          $(".home").addClass("fixed-home");
      }
      else {
          $(".home").removeClass("fixed-home");
      }
  });
  // window.addEventListener('scroll', () => {
  //   let home = document.querySelector('.home');
  //   if (window.scrollY > 50) {
  //     home.classList.add('fixed-home');
  //   }
  //   else {
  //     home.classList.remove('fixed-home');
  //   }
  // });
});

window.onscroll = function () {
    showGoToTopButton();
  };
  
  function showGoToTopButton() {
    let goToTopBtn = document.getElementById("goToTopBtn");
    if (document.documentElement.scrollTop > 20) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }
  }
  
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  