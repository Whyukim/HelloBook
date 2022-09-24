const changeMoon = (moon, mode) => {
  let stop = 0;

  const loop = () => {
    moon.innerHTML = mode[stop];

    if (stop < mode.length - 1) {
      setTimeout(loop, 50);
      stop++;
    }
  };
  loop();
};

const moonMode = async (color) => {
  const moon = document.querySelector(".moon-mode");
  const light = ["🌝", "🌕", "🌖", "🌗", "🌘", "🌑", "🌚"];
  const dark = ["🌚", "🌑", "🌒", "🌓", "🌔", "🌕", "🌝"];

  const isUserColorTheme = localStorage.getItem("theme");
  isUserColorTheme ? isUserColorTheme : "light";

  if (isUserColorTheme === "dark") {
    localStorage.setItem("theme", "dark");
    document.body.dataset.theme = "dark";
    changeMoon(moon, dark);
  } else {
    localStorage.setItem("theme", "light");
    document.body.dataset.theme = "light";
    changeMoon(moon, light);
  }

  moon.addEventListener("click", () => {
    const body = document.body.dataset.theme;

    if (body == "light") {
      localStorage.setItem("theme", "dark");
      document.body.dataset.theme = "dark";
      changeMoon(moon, dark);
    } else {
      localStorage.setItem("theme", "light");
      document.body.dataset.theme = "light";
      changeMoon(moon, light);
    }
  });
};

const main = async () => {
  moonMode();
};

document.addEventListener("DOMContentLoaded", main);
