function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  const lis = document.getElementsByClassName('ranked-list').querySelectorAll('li');

  for (let i = 0; i < lis.length; n++) {
    lis[i].innerHTML = (i + n).toString()
  };
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}
