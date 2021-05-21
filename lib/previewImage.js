'use strict'

window.addEventListener('load', init_preview);

function init_preview() {

  var img_shell = document.getElementById("imageShell")
  var dts = document.getElementsByTagName("dt")
  var dt_links = document.getElementsByClassName("dtLink")
  var opac = 0
  var fadein = {}
  var fadeout = {}

  function assign_preview(this_dt,this_link,index) {
    var url = this_link.getAttribute("href")

    var url_arr = url.split('/')
    var string = url_arr[url_arr.length-1]

    this_dt.addEventListener("mouseover", function () { flash_image(string,index) })

    this_dt.addEventListener("mouseout", function () {
      clearInterval(fadein)
      clearInterval(fadeout)
      hide_img_shell()
    })

  }

  function hide_img_shell() {
    img_shell.style.display = "none";
  }

  function flash_image(filename, index) {

    img_shell.id = filename
    img_shell.style.opacity = 0;
    img_shell.style.display = 'block'
    fadein = setInterval(fade_in_img, 25)
  }

  function fade_in_img() {
    img_shell.style.opacity = opac
    opac+=0.025
    if (opac >= 1) {
      clearInterval(fadein)
      fadeout = setInterval(fade_out_img,25)
    }
  }

  function fade_out_img(el) {
    img_shell.style.opacity = opac
    opac-=0.025
    if (opac <= 0) {
      hide_img_shell()
      clearInterval(fadeout)
    }
  }

  hide_img_shell()

  for (let i = 0; i < dt_links.length; i++) {
    assign_preview(dts[i],dt_links[i],i)
  }



}
