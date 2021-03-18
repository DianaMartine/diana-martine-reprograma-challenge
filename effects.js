$("a").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    targetOffset = $(id).offset().top;

    $("html, body").animate(
      {
        scrollTop: targetOffset,
      },
      500
    );
  });

  
  let scrollPos = window.scrollY;
  const sobre = document.querySelector(".container-sobre");
  const links = document.querySelector(".container-links");

  function addClassOnScrollSobre() {
    sobre.classList.add("on");
  }

  function addClassOnScrollLinks() {
    links.classList.add("on");
  }

  window.addEventListener("scroll", function () {
    scrollPos = window.scrollY;

    if (scrollPos >= 350) {
      addClassOnScrollSobre();
    }
  });

  window.addEventListener("scroll", function () {
    scrollPos = window.scrollY;

    if (scrollPos >= 700) {
      addClassOnScrollLinks();
    }
  });
