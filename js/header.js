import { deleteApi } from "./api.js";

const getToken = () => {
  return localStorage.getItem("token");
};

const logout = async () => {
  const token = getToken();
  if (!token) {
    location.assign("/login.html");
  }

  try {
    deleteApi("https://api.marktube.tv/v1/me", token);
  } catch (error) {
    console.log("logout error", error);
  } finally {
    localStorage.removeItem("token");
    location.assign("/login.html");
  }
};

const logoutBtn = async () => {
  const logoutBtn = document.querySelector(".logout-btn");
  logoutBtn.addEventListener("click", logout);
};

const toggle = async () => {
  let menu = document.querySelector(".header-container");
  menu.classList.toggle("active");
};

const toggleBtn = async () => {
  const toggleBtn = document.querySelector(".header-btn");
  toggleBtn.addEventListener("click", toggle);
};

const main = async () => {
  logoutBtn();

  toggleBtn();
};

document.addEventListener("DOMContentLoaded", main);
