function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  const lis = document.getElementByClassName('ranked-list').querySelectorAll('li');

  for (let n = 0; n < lis.length; n++) {
    lis[n].innerHTML = (n + 1).toString()
  };
}
