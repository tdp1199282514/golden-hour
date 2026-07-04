const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const loading = document.getElementById("loading");
const menuLinks = document.querySelectorAll(".menu a");

const pictures = document.querySelectorAll(".picture");
const cards = document.querySelectorAll(".profile-card");

const closeButtons = document.querySelectorAll(".close");


// ハンバーガーメニュー
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// ローディング
window.addEventListener("load", () => {
  setTimeout(() => {
    loading.classList.add("hide");

    setTimeout(() => {
      loading.remove();
    }, 2000);
  }, 1000);
});

// セクション遷移
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// 開く

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;

    const target = document.querySelector(`.overlay[data-id="${id}"]`);

    if (target) {
      target.classList.add("active");
    }
  });
});

// 閉じる

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".overlay").classList.remove("active");
  });
});

