var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Mobile Nav
var mobileNavOpenBtn = $(".js-mobile-nav-open");
var mobileNavCloseBtn = $(".js-mobile-nav-close");
var mobileNav = $(".js-mobile-nav");
var body = $("body");

mobileNavOpenBtn.on("click", function() {
  body.addClass("overflow-hidden");
  mobileNav.addClass("is-active");
});

mobileNavCloseBtn.on("click", function() {
  body.removeClass("overflow-hidden");
  mobileNav.removeClass("is-active");
});

// Header BG
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".top-header").outerHeight() + 75;
var logoVertical = $(".logo-vertical");
var logoHorizontal = $(".logo-horizontal");

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 100);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > navbarHeight) {
    $(".site-header").addClass("is-active");
    logoVertical.removeClass("is-active");
    logoHorizontal.addClass("is-active");
  } else {
    $(".site-header").removeClass("is-active");
    logoHorizontal.removeClass("is-active");
    logoVertical.addClass("is-active");
  }

  lastScrollTop = st;
}

var path = window.location;
$("header .nav-link").each(function() {
  if (this.href === path) {
    $(this).addClass("is-active");
  }
});

// Accordions
var allPanels = $(".js-badger-accordion > dd").hide();
var allHeadersPanel = $('.js-badger-accordion-header');

$(".js-badger-accordion-header").on('click', function() {
  
  if ($(this).hasClass("is-active")) {
    allPanels.slideUp();
    allHeadersPanel.removeClass('is-active');
    $(this).removeClass("is-active");
  } else {
    allPanels.slideUp();
    allHeadersPanel.removeClass('is-active');
    $(this).addClass("is-active");
    $(this)
      .parent()
      .next()
      .slideDown();
  }
});

$(".panel-control").on("click", function(e) {
  var panelID = $(this).attr("id");
  $(this)
    .addClass("is-active")
    .siblings(".is-active")
    .toggleClass("is-active");
  if ($(`#${panelID}-display`).hasClass("is-active")) {
    // do nothing
  } else {
    $(`#${panelID}-display`)
      .toggleClass("is-active")
      .siblings(".is-active")
      .removeClass("is-active");
  }
});

// Form Input Functionality
var validInputs = $(".input");
validInputs.map(function(inputEl) {
  if (inputEl.value !== "") {
    $(inputEl)
      .parent()
      .addClass("input--filled");
  }

  $(this).on("focus", onInputFocus);
  $(this).on("blur", onInputBlur);
});

function onInputFocus(ev) {
  $(this)
    .parent()
    .addClass("input--filled");
}

function onInputBlur(ev) {
  if (ev.target.value.trim() === "") {
    $(this)
      .parent()
      .removeClass("input--filled");
  }
}

if ($(".smooth-scroll").length) {
  $(".smooth-scroll").click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
}


}
/*
     FILE ARCHIVED ON 08:57:21 Feb 05, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:02:39 Feb 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.818
  exclusion.robots: 0.031
  exclusion.robots.policy: 0.015
  esindex: 0.015
  cdx.remote: 7.961
  LoadShardBlock: 104.807 (3)
  PetaboxLoader3.datanode: 133.864 (5)
  PetaboxLoader3.resolve: 148.469 (3)
  load_resource: 215.679 (2)
*/