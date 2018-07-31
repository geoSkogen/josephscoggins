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
    var filename = card.id
    card.style.background = "url(images/" + filename + ".jpg);"
  }

  function removeImage(card, callNo) {
    card.style.background = "initial"
  }
}
