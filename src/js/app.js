window.addEventListener("load", function () {
  let header = document.querySelector("header");
  let link = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__nav");
  if (menu) {
    link.addEventListener(
      "click",
      function () {
        link.classList.toggle("active");
        menu.classList.toggle("open");
      },
      false
    );
    window.addEventListener("scroll", () => {
      if (menu.classList.contains("open")) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });
    document.addEventListener("click", (e) => {
      let target = e.target;
      if (
        !target.classList.contains("header__nav") &&
        !target.classList.contains("header__burger") &&
        !target.classList.contains("dropdown__link")
      ) {
        link.classList.remove("active");
        menu.classList.remove("open");
      }
    });
  }
  function checkScroll() {
    if (window.scrollY > 0) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }

  checkScroll();


  window.addEventListener("scroll", ()=> {
    checkScroll();
  });
});
