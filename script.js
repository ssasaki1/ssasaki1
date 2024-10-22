// ページ読み込み時のコンソールメッセージ
console.log("Welcome to my developer profile page!");

// ページが読み込まれたときにJumbotronがフェードインする
document.addEventListener("DOMContentLoaded", function () {
  const jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.opacity = 0;
  jumbotron.style.transition = "opacity 1.5s ease-in-out";

  setTimeout(() => {
    jumbotron.style.opacity = 1;
  }, 500); // ページ読み込み後0.5秒でフェードインを開始
});

// カードをホバーしたときに軽く拡大する効果を追加
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseover", function () {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseout", function () {
    card.style.transform = "scale(1)";
  });
});
