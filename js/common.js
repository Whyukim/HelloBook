export function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

export function addClass(className, addClass) {
  const element = document.querySelector(`${className}`);
  element.classList.add(addClass);
}

export function addElement(element, addClass) {
  element.classList.add(addClass);
}

export function removeClass(className, removeClass) {
  const element = document.querySelector(`${className}`);
  element.classList.remove(removeClass);
}

export function removeElement(element, removeClass) {
  element.classList.remove(removeClass);
}

export function getNowDate() {
  const happyNewYear = new Date();
  const year = happyNewYear.getFullYear();
  const month = happyNewYear.getMonth() + 1;
  const date = happyNewYear.getDate();
  const time = `${year}.${month >= 10 ? month : "0" + month}.${
    date >= 10 ? date : "0" + date
  }`;
  return time;
}
