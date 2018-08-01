'use strict'

window.addEventListener('load', initPreview);

function initPreview() {}
  var card = document.getElementsByClassName("absShell")[0]
  var dts = document.getElementsByTagName("dt")
  var dtLinks = document.getElementsByClassName("dtLink")
  card.style.display = "none";
  for (let i = 0; i < dtLinks.length; i++) {
    assignPreview(dts[i],dtLinks[i])
  }

  function assignPreview(thisDt,thisLink) {
    var aUrl = thisLink.getAttribute("href")
    var aString = aUrl.slice(27)
    thisDt.addEventListener("mouseover", function () { createImage(aString) })
    thisLink.addEventListener("mouseover", function () { createImage(aString) })
    //thisDt.addEventListener("click", function () { createImage(aString) })
    //thisLink.addEventListener("click", function () { createImage(aString) })
    thisDt.addEventListener("mouseout", function () { removeImage(aString) })
  }

  function createImage(str) {
    console.log(str)
    if (card) {
    card.style.backgroundImage = "url(../images/" + str + ".jpg);"
    card.id = str
    card.style.display = "block"
    }
  }

  function removeImage() {
    card.style.background = "initial"
    card.style.display = "none"
    card.id = ""
  }
}
