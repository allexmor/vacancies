document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".navigation__burger");
  const topMenu = document.querySelector(".navigation--top");
  const vacanciesHeader = document.querySelectorAll(".vacancy__header");
  const showMoreGallery = document.querySelector(".gallery__show-more");
  const galleryWrapper = document.querySelector(".gallery__wrapper");
  const imagesForToggle = document.querySelectorAll(".gallery__item.toggled");
  const reviewElements = document.querySelector(".review__elems");

  burger.addEventListener("click", function (e) {
    topMenu.classList.toggle("active");
  });

  document
    .querySelector(".navigation--top ul")
    .addEventListener("click", function (e) {
      e.preventDefault();

      if (!e.target.classList.contains("link")) return;

      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });

  document
    .querySelector(".banner__buttons")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const targetBtn = e.target;
      if (!targetBtn.classList.contains("btn")) return;

      const id = targetBtn.getAttribute("href");
      console.log(id);

      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });

  document.querySelectorAll(".vacancy__header").forEach((item) => {
    let vacancy = item.nextElementSibling;

    item.addEventListener("click", (e) => {
      if (!item.classList.contains("opened")) {
        closeVacancies();
        vacancy.style.height = vacancy.scrollHeight + "px";
        item.classList.add("opened");
      } else {
        vacancy.style.height = 0 + "px";
        item.classList.remove("opened");
      }
    });
  });

  document
    .querySelector(".gallery__bottom a")
    .addEventListener("click", function (e) {
      e.preventDefault();
      console.log(e, e.target);
      const id = e.target.getAttribute("href");

      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });

  function closeVacancies() {
    vacanciesHeader.forEach((vacancyHeader) => {
      vacancyHeader.classList.remove("opened");
      vacancyHeader.nextElementSibling.style.height = 0 + "px";
    });
  }

  showMoreGallery.addEventListener("click", function () {
    showMoreGallery.querySelectorAll("span").forEach((span) => {
      span.classList.toggle("active");
    });

    imagesForToggle.forEach((image) => {
      if (image.classList.contains("hidden")) {
        image.classList.remove("hidden");
      } else {
        image.classList.add("hidden");
      }
    });
  });

  reviewElements.addEventListener("click", function (e) {
    console.log(e.target);
    const elem = e.target;

    if (
      !elem.classList.contains("review_elem") ||
      elem.classList.contains("active")
    )
      return;

    const id = elem.dataset.id;
    console.log(id);
    document.querySelector(".review_elem.active").classList.remove("active");
    elem.classList.add("active");

    document
      .querySelector(".reviews-detail__item.active")
      .classList.remove("active");
    document
      .querySelector(`.reviews-detail__item[data-id='${id}']`)
      .classList.add("active");
  });
});
