import { loginApi } from "./api.js";
import { addClass, addElement, removeClass, removeElement } from "./common.js";
import { profile } from "./dummy.js";

const getBookList = () => {
  return JSON.parse(localStorage.getItem("item"));
};

const checkEmail = (str) => {
  const reg_email =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
};

const inputFullCheck = async () => {
  const input = document.querySelectorAll("input.focus");

  let flag = true;
  for (let i = 0; i < input.length; i++) {
    if (!input[i].parentElement.classList.contains("active")) {
      flag = false;
      break;
    }
  }

  if (flag) {
    addClass(".login-btn", "active");
  } else {
    removeClass(".login-btn", "active");
  }
};

const loginCheck = () => {
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  email.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value.length > 0) {
      addClass(".email-check", "no-active");
    } else {
      removeClass(".email-check", "no-active");
    }

    if (checkEmail(value)) {
      addClass(".email-check", "active");
    } else {
      removeClass(".email-check", "active");
    }

    inputFullCheck();
  });

  password.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value.length > 0) {
      addClass(".password-check", "active");
    } else {
      removeClass(".password-check", "active");
    }

    inputFullCheck();
  });
};

const clearInput = (name) => {
  name.addEventListener("click", (e) => {
    const form = e.target.parentElement;
    form.children[0].value = "";
    removeElement(form, "active");
    removeElement(form, "no-active");
    removeClass(".login-btn", "active");
  });
};

const clear = () => {
  const email = document.querySelector(".email-check .check");
  const password = document.querySelector(".password-check .check");

  clearInput(email);
  clearInput(password);
};

const login = async (e) => {
  localStorage.setItem("token", "sdamfvjkasnvkjwnskvs");
  const list = getBookList();
  if (!list) {
    localStorage.setItem("item", JSON.stringify(profile.notice));
  }

  location = "/";

  // const email = document.querySelector("#email").value;
  // const password = document.querySelector("#password").value;

  // try {
  //   const res = await loginApi("https://api.marktube.tv/v1/me", {
  //     email,
  //     password,
  //   });

  //   console.log(res);
  //   const { token } = res.data;
  //   if (!token) {
  //     return;
  //   }

  // localStorage.setItem("token", token);
  //   location = "/";
  // } catch (error) {
  //   const data = error.response.data;

  //   if (data) {
  //     const state = data.error;

  //     if (state === "USER_NOT_EXIST") {
  //       alert("사용자가 존재하지 않습니다.");
  //     } else if (state === "PASSWORD_NOT_MATCH") {
  //       alert("비밀번호가 틀렸습니다.");
  //     }
  //     console.log(form);
  //   }
  // }
};

const loginButton = async () => {
  const form = document.querySelector(".login-form");
  const loginButton = document.querySelector(".login-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!loginButton.classList.contains("active")) {
      return;
    }

    login(e);
  });
};

const focus = async () => {
  const focusAll = document.querySelectorAll(".focus");
  focusAll.forEach((item) => {
    item.addEventListener("focusin", (e) => {
      addElement(e.target.parentElement, "focus");
    });

    item.addEventListener("focusout", (e) => {
      removeElement(e.target.parentElement, "focus");
    });
  });
};

const main = async () => {
  loginButton();

  loginCheck();

  focus();

  clear();
};

document.addEventListener("DOMContentLoaded", main);
