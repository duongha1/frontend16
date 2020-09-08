window.onmousewheel = function (e){
    const scroll_top = document.documentElement.scrollTop;
    const navBar = $('#my_navbar');
    if(scroll_top >= 80){
      navBar.removeClass('py-4'); //if using js, then we use "navBar.classList.remove('py-4')"
    }else{
      navBar.addClass('py-4'); //if using js, then we use "navBar.classList.add('py-4')"
    }
  }

