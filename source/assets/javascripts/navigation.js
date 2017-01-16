// Handles binding navigation menus to
// triggers for showing / hiding
// utility and primary navigation menus on small
// viewport sizes.

// Triggers are the buttons that make menus visible,
// generally there is one per menu.
// Menus are the actual nav items that contain lists of links.
var $primaryTrigger = $('.primary-trigger'),
    $primaryMenu = $('.primary-navigation'),
    $utilityTrigger = $('.utility-trigger'),
    $utilityMenu = $('.utility-navigation');

// toggle all visibility identifiers for given menu trigger
function toggleTriggerVisibility(trigger) {
  trigger.toggleClass('is-active');
};

// toggle all visibility identifiers for given menu
function toggleMenuVisibility(menu) {
  menu.toggleClass('is-visible');
  menu.attr("aria-expanded", menu.hasClass('is-visible').toString());
}

// restore original menu state
function resetMenu(menu) {
  menu.removeClass('is-visible')
    .attr('aria-expanded', 'false')
    .removeAttr('style');
};

// Restore original menu trigger state
function resetTrigger(trigger) {
  trigger.removeClass('is-active').removeAttr('style');
};

// Toggle menu visibility on menu trigger click
// also handles visibility for utility menu
// (only one can be open at a time)
function toggleMenu() {
  $primaryTrigger.on("click", function(e){
    toggleTriggerVisibility($primaryTrigger);
    toggleMenuVisibility($primaryMenu);

    // if utilityMenu IS visible,
    // hide it before showing the primary menu.
    if($utilityMenu.is(':visible')){
      resetTrigger($utilityTrigger);
      $utilityMenu.removeClass('is-visible').slideUp('fast');
    }

    $primaryMenu.slideToggle("fast");
  });
};

// Toggle menu visibility on menu trigger click
// also handles visibility for primary menu
// (only one can be open at a time)
function toggleUtilityMenu() {
  $utilityTrigger.on("click", function(e){
    toggleTriggerVisibility($utilityTrigger);
    toggleMenuVisibility($utilityMenu);

    // if primaryMenu IS visible,
    // hide it before showing utility menu
    if ($primaryMenu.is(':visible')) {
      resetTrigger($primaryTrigger);
      $primaryMenu.removeClass('is-visible')
        .attr("aria-hidden", 'true')
        .slideUp('fast');
    }

    $utilityMenu.slideToggle('fast');
  });
};

// Fixes broken navigation when changing states on mobile then expanding to desktop
jRes.addFunc({
  breakpoint: 'nav',
  enter: function(){
    $utilityMenu.attr('aria-expanded', false);
    $primaryMenu.attr('aria-expanded', false);
    $utilityTrigger.attr('aria-hidden', false);
    $primaryTrigger.attr('aria-hidden', false);
  },
  exit: function(){
    resetTrigger($utilityTrigger);
    resetMenu($utilityMenu);
    resetMenu($primaryMenu);
    resetTrigger($primaryTrigger);
    $utilityTrigger.attr('aria-hidden', true);
    $primaryTrigger.attr('aria-hidden', true);
    $utilityMenu.attr('aria-expanded', true);
    $primaryMenu.attr('aria-expanded', true);
  }
});

toggleUtilityMenu();
toggleMenu();
