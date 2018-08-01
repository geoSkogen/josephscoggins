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
    thisDt.addEventListener("mouseover", function () { removeImage(false);createImage(aString, aUrl) })
    thisLink.addEventListener("mouseover", function () { removeImage(false);createImage(aString, aUrl) })
    thisDt.addEventListener("click", function () { removeImage(false);createImage(aString, aUrl) })
    thisLink.addEventListener("click", function () { removeImage(false);createImage(aString, aUrl) })
    thisDt.addEventListener("mouseout", function () { removeImage(aString) })
  }

  function createImage(str,url) {
    console.log(str)
    if (card) {
    card.setAttribute("href",url)
    card.id = str
    card.style.display = "block"
    window.setTimeout(function () { removeImage(str) }, 5000)
    }
  }

  function removeImage(arg) {
    var elm = {}
    if (arg) {
      elm = document.getElementById(arg)
    } else {
      elm = card
    }
    elm.style.display = "none"
    elm.id = "blank"
  }
}
