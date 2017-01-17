document.addEventListener("DOMContentLoaded", function() {
  var menuTrigger = document.querySelectorAll('.mobile-trigger'),
      primaryMenu = document.querySelectorAll('.primary-navigation');

  if(menuTrigger.length > 0){
    function swapClasses(event) {
      menuTrigger[0].classList.contains('is-open') ? menuTrigger[0].setAttribute('aria-expanded', 'false') : menuTrigger[0].setAttribute('aria-expanded', 'true');
      primaryMenu[0].classList.contains('is-open') ? primaryMenu[0].setAttribute('aria-hidden', 'true') : primaryMenu[0].setAttribute('aria-hidden', 'false');
      menuTrigger[0].classList.toggle('is-open');
      primaryMenu[0].classList.toggle('is-open');
    };

    menuTrigger[0].addEventListener("click", swapClasses);
  }
});
