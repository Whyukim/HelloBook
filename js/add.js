import { getApi, deleteApi, postApi } from "./api.js";
import { getNowDate, validURL } from "./common.js";

const getToken = () => {
  return localStorage.getItem("token");
};

const getBookList = () => {
  return JSON.parse(localStorage.getItem("item"));
};

const login = async () => {
  const token = getToken();
  if (!token) {
    location.assign("./login.html");
    return;
  }
};

const inputFullCheck = async () => {
  const addBtn = document.querySelector(".add-btn");
  const input = document.querySelectorAll("input.focus");

  let flag = true;
  for (let i = 0; i < input.length - 1; i++) {
    if (!input[i].parentElement.classList.contains("active")) {
      flag = false;
      break;
    }
  }

  if (flag) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};

const inputEvent = async (input, check) => {
  input.addEventListener("input", (e) => {
    if (e.target.value.length > 0) {
      check.classList.add("active");
    } else {
      check.classList.remove("active");
    }

    inputFullCheck();
  });
};

const inputURLEvent = async (input, check) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value.length > 0) {
      check.classList.add("no-active");
    } else {
      check.classList.remove("no-active");
    }

    const URL = validURL(value);
    if (URL) {
      check.classList.add("active");
    } else {
      check.classList.remove("active");
    }

    inputFullCheck();
  });
};

const inputCheck = () => {
  const title = document.querySelector("#title");
  const titleCheck = document.querySelector(".title-check");
  const message = document.querySelector("#message");
  const messageCheck = document.querySelector(".message-check");
  const author = document.querySelector("#author");
  const authorCheck = document.querySelector(".author-check");
  const url = document.querySelector("#url");
  const urlCheck = document.querySelector(".url-check");
  const image = document.querySelector("#image");
  const imageCheck = document.querySelector(".image-check");

  inputEvent(title, titleCheck);
  inputEvent(message, messageCheck);
  inputEvent(author, authorCheck);
  inputURLEvent(url, urlCheck);
  inputEvent(image, imageCheck);
};

const clearInput = (name) => {
  const addBtn = document.querySelector(".add-btn");

  name.addEventListener("click", (e) => {
    const form = e.target.parentElement;
    form.children[0].value = "";
    form.classList.remove("active");
    form.classList.remove("no-active");
    if (!e.target.dataset.image) addBtn.classList.remove("active");
  });
};

const clear = () => {
  const title = document.querySelector(".title-check .check");
  const message = document.querySelector(".message-check .check");
  const author = document.querySelector(".author-check .check");
  const url = document.querySelector(".url-check .check");
  const image = document.querySelector(".image-check .check");

  clearInput(title);
  clearInput(message);
  clearInput(author);
  clearInput(url);
  clearInput(image);
};

const focus = async () => {
  const foc = document.querySelectorAll(".focus");
  foc.forEach((item) => {
    item.addEventListener("focusin", (e) => {
      e.target.parentElement.classList.add("focus");
    });

    item.addEventListener("focusout", (e) => {
      e.target.parentElement.classList.remove("focus");
    });
  });
};

const addBook = async (e) => {
  const list = getBookList();
  const time = getNowDate();

  const title = document.querySelector("#title").value;
  const message = document.querySelector("#message").value;
  const author = document.querySelector("#author").value;
  const url = document.querySelector("#url").value;
  let image = document.querySelector("#image").value;

  if (image.value === undefined) image = null;

  const first_id = list[list.length - 1];
  const local_id = localStorage.getItem("id");
  let now_id = local_id === null ? String(Number(first_id.id) + 1) : local_id;
  localStorage.setItem("id", String(Number(now_id) + 1));

  console.log(image);
  let obj = {
    id: now_id,
    title,
    description: message,
    date: time,
    update: null,
    author,
    link: url,
    image,
  };

  try {
    list.push(obj);
    localStorage.setItem("item", JSON.stringify(list));
    location.assign("index.html");
  } catch (error) {
    console.log("save error", error);
    alert("책 추가 실패");
  }
};

const addButton = async () => {
  const form = document.querySelector(".add-form");
  const addButton = document.querySelector(".add-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!addButton.classList.contains("active")) {
      return;
    }

    addBook(e);
  });
};

const backHistory = () => {
  window.history.back();
};

const backButton = () => {
  const back = document.querySelector(".btn-back");
  back.addEventListener("click", backHistory);
};

const main = async () => {
  login();

  inputCheck();

  focus();

  clear();

  backButton();

  addButton();
};

document.addEventListener("DOMContentLoaded", main);
