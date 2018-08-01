'use strict'

window.addEventListener('load', initPreview);

function initPreview() {
  var shell = document.getElementsByClassName("relShell")[0]
  var card = document.getElementsByClassName("absShell")[0]
  var dts = document.getElementsByTagName("dt")
  var dtLinks = document.getElementsByClassName("dtLink")
  for (let i = 1; i < dtLinks.length; i++) {
    assignPreview(dts[i],dtLinks[i])
  }

  function assignPreview(thisDt,thisLink) {
    var aString = thisLink.id
    thisDt.addEventListener("mouseover", function () { createImage(aString) })
    thisLink.addEventListener("mouseover", function () { createImage(aString) })
    thisDt.addEventListener("click", function () { createImage(aString) })
    thisLink.addEventListener("click", function () { createImage(aString) })
    thisDt.addEventListener("mouseout", function () { removeImage(aString) })
  }

  function createImage(str) {
    if (card.style.display == "none") {
    card.style.background = "url(images/" + str + ".jpg);"
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
