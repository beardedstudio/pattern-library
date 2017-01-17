var menuTrigger = document.querySelectorAll('.mobile-trigger')[0],
    primaryMenu = document.querySelectorAll('.primary-navigation')[0];

document.addEventListener("DOMContentLoaded", function() {

  if(menuTrigger !== null){
    function swapClasses(event) {
      menuTrigger.classList.contains('is-open') ? menuTrigger.setAttribute('aria-expanded', 'false') : menuTrigger.setAttribute('aria-expanded', 'true');
      primaryMenu.classList.contains('is-open') ? primaryMenu.setAttribute('aria-hidden', 'true') : primaryMenu.setAttribute('aria-hidden', 'false');
      menuTrigger.classList.toggle('is-open');
      primaryMenu.classList.toggle('is-open');
    };

    menuTrigger.addEventListener("click", swapClasses);
  }
});

jRes.addFunc({
  breakpoint: 'nav',
  enter: function() {
    menuTrigger.setAttribute('aria-expanded', 'false')
    primaryMenu.setAttribute('aria-hidden', true);

    if(menuTrigger.classList.contains('is-open')){
      menuTrigger.classList.toggle('is-open');
    }

    if(primaryMenu.classList.contains('is-open')){
      primaryMenu.classList.toggle('is-open');
    }
  },

  exit: function() {
    menuTrigger.setAttribute('aria-expanded', 'true')
    primaryMenu.setAttribute('aria-hidden', false);

    if(menuTrigger.classList.contains('is-open')){
      menuTrigger.classList.toggle('is-open');
    }

    if(primaryMenu.classList.contains('is-open')){
      primaryMenu.classList.toggle('is-open');
    }
  }
});
