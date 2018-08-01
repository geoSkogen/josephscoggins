'use strict'

window.addEventListener("load", initNavButtons)

function initNavButtons() {
  var href = ""
  var dts = document.getElementsByTagName('dt')
  var dtLinks = document.getElementsByClassName('dtLink')
  for (let i = 0; i < dtLinks.length; i++) {
    href = dtLinks[i].getAttribute("href")
    clickLink(dts[i],href)
  }
  function clickLink(elm, url) {
    elm.addEventListener('click', function () {
      window.location.assign(url)
    })
  }
}
