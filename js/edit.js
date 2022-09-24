const backHistory = () => {
  window.history.back();
};

const backButton = () => {
  const back = document.querySelector(".btn-back");
  back.addEventListener("click", backHistory);
};

const main = () => {
  backButton();
};

document.addEventListener("DOMContentLoaded", main);
