function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  const lis = document.getElementByClassName('ranked-list').querySelectorAll('li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString()
  };
}
