'use strict'

window.addEventListener('load', initPreview);

function initPreview() {
  var card = document.getElementById("imageShell")
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
    thisDt.addEventListener("click", function () { removeImage() })
    thisLink.addEventListener("click", function () { removeImage() })
    thisDt.addEventListener("mouseout", function () { removeImage() })
  }

  function createImage(str) {
    console.log(str)
    if (card) {
    //card.style.backgroundImage = "url(../images/" + str + ".jpg);"
    card.id = str
    card.style.display = "block"
    window.setTimeout(function () {removeImage()}, 5000)
    }
  }

  function removeImage() {
    //card.style.background = "initial"
    card.style.display = "none"
    card.id = ""
  }
}
