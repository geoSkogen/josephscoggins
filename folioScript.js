window.addEventListener('load', initFuncs);

function initFuncs() {
  var cards = document.getElementsByClassName("relCard");
  var links = document.getElementsByTagName("dt");
  for (var i = 1; i < links.length; i++) {
    initRollover(links[i], cards[i-1], i-1);
  }

  function initRollover(thisLink, thisCard, index) {
    thisLink.onmouseover = function () { createImage(thisCard, index); };
    thisLink.onmouseout = function () { removeImage(thisCard, index); };
  }

  function createImage(card, callNo) {
    var newImg = document.createElement("img");
    var newPath = card.id + ".jpg";
    newImg.setAttribute("src", "images/" + newPath);
    card.appendChild(newImg);
  }

  function removeImage(card, callNo) {
    card.innerHTML = "";
  }
}
