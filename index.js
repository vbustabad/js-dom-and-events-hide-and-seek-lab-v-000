function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let container = document.getElementById("nested");
  return container.querySelectorAll(".target").innerHTML;
}

 // function increaseRankBy(n) {
 //   return document.querySelector(selector);
 // }
