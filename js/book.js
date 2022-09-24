const edit = () => {
  const adress = window.location.search.split("=")[1];
  location.assign(`/edit?=${adress}`);
};

const editButton = () => {
  const editBtn = document.querySelector(".btn-edit");
  editBtn.addEventListener("click", edit);
};

const main = () => {
  editButton();
};

document.addEventListener("DOMContentLoaded", main);
