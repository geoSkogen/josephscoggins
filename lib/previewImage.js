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
    thisDt.addEventListener("click", function () { removeImage(false) })
    thisLink.addEventListener("click", function () { removeImage(false) })
    thisDt.addEventListener("mouseout", function () { removeImage(false) })
  }

  function createImage(str) {
    console.log(str)
    if (card) {
    //card.style.backgroundImage = "url(../images/" + str + ".jpg);"
    card.id = str
    card.style.display = "block"
    window.setTimeout(function () {removeImage(str)}, 5000)
    }
  }

  function removeImage(arg) {
    var elm = {}
    if (arg) {
      var elm = document.getElementById(arg)
    } else {
      elm = card
    }
    elm.style.display = "none"
    elm.id = ""
  }
}
