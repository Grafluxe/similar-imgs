/**
 * @author Leandro Silva | Grafluxe, 2016
 * @license MIT
 */

(function () {
  "use strict";

  if (window.hasGrafluxeSimImg) {
    return;
  }

  var main = document.createElement("div"),
      gx = document.createElement("div"),
      msg = document.createElement("div"),
      thumb = document.createElement("div"),
      btnSearch = document.createElement("div"),
      btnCancel,
      img = document.getElementsByTagName("img"),
      imgLen = img.length,
      imgClick,
      anchor = document.getElementsByTagName("a"),
      anchorLen = anchor.length,
      anchorClick,
      i,
      setThumb,
      thumbSrc,
      msgVisible = true;

  window.hasGrafluxeSimImg = true;

  //main
  main.style.setProperty("background", "linear-gradient(0deg, #f3cf12 50%, #feda1d 50%)", "important");
  main.style.setProperty("color", "#333", "important");
  main.style.setProperty("font", "bold 13px Arial, Helvetica, sans-serif", "important");
  main.style.setProperty("position", "fixed", "important");
  main.style.setProperty("width", "100%", "important");
  main.style.setProperty("top", "0", "important");
  main.style.setProperty("left", "0", "important");
  main.style.setProperty("padding", "10px", "important");
  main.style.setProperty("width", "97%", "important");
  main.style.setProperty("width", "calc(100% - 20px)", "important");
  main.style.setProperty("box-shadow", "0 0 10px #999", "important");
  main.style.setProperty("z-index", "9999999999", "important");
  main.style.setProperty("box-sizing", "unset", "important");

  main.id = "grafluxe-simimg";

  //gx
  gx.style.setProperty("background", "    url(data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAM5JREFUeNpiZEADoaGhCkAqAIjtgViAgXiwkRHJEJDGfiBOYCAdLFi9enUiI5JB+4HYgAyDNgANCgQxmKAC68k0CAQKYQwmoKtA3nIg0yCQ9x7ADQPifAbywUFkDhOa9w4A8QMSDHuAbtgHIJ4AxIpQSQVynYmcNBqAVD0pmoHhxYjuMpBBBqQahA3AkgY5Bm3AZVgAGYZNxGXYAjLS1wFchhVCkwUx4AByqscam0gxmo+jtAAloYlAFzUQTBpohgagJeYLQEM2EHIyQIABAIfHMpweN/VIAAAAAElFTkSuQmCC) no-repeat", "important");
  gx.style.setProperty("width", "19px", "important");
  gx.style.setProperty("height", "16px", "important");
  gx.style.setProperty("float", "right", "important");
  gx.style.setProperty("cursor", "pointer", "important");

  gx.id = "grafluxe-logo-icon";
  gx.title = "Visit Grafluxe";

  gx.onclick = function () {
    window.open("http://grafluxe.com/scripts#bookmarklets", "_blank");
  };

  //msg
  msg.style.setProperty("background", "linear-gradient(0deg, #f3cf12 50%, #feda1d 50%)", "important");
  msg.style.setProperty("position", "absolute", "important");
  msg.style.setProperty("width", "100%", "important");
  msg.style.setProperty("height", "100%", "important");
  msg.style.setProperty("top", "0", "important");
  msg.style.setProperty("left", "0", "important");
  msg.style.setProperty("text-align", "center", "important");
  msg.style.setProperty("line-height", "6.5", "important");

  msg.innerHTML = "Click an image to search Google for similar ones.";

  //thumb
  thumb.style.setProperty("background", "#333 no-repeat center center / contain", "important");
  thumb.style.setProperty("width", "70px", "important");
  thumb.style.setProperty("height", "70px", "important");
  thumb.style.setProperty("float", "left", "important");

  //btns
  btnSearch.style.setProperty("background", "#fff", "important");
  btnSearch.style.setProperty("width", "28%", "important");
  btnSearch.style.setProperty("max-width", "130px", "important");
  btnSearch.style.setProperty("height", "28px", "important");
  btnSearch.style.setProperty("margin", "15px 0 0 5px", "important");
  btnSearch.style.setProperty("padding", "12px 0 0 0", "important");
  btnSearch.style.setProperty("text-align", "center", "important");
  btnSearch.style.setProperty("cursor", "pointer", "important");
  btnSearch.style.setProperty("float", "left", "important");
  btnSearch.style.setProperty("box-sizing", "unset", "important");

  btnSearch.innerHTML = "Search";

  btnCancel = btnSearch.cloneNode();

  btnCancel.innerHTML = "Cancel";

  btnSearch.onmouseover = btnCancel.onmouseover = function (e) {
    e.target.style.setProperty("box-shadow", "0 0 10px #c39f00", "important");
  };

  btnSearch.onmouseout = btnCancel.onmouseout = function (e) {
    e.target.style.setProperty("box-shadow", "unset", "important");
  };

  btnSearch.onclick = function () {
    window.open("http://images.google.com/searchbyimage?image_url=" + encodeURIComponent(thumbSrc), "_blank");
  };

  btnCancel.onclick = function () {
    for (i = 0; i < imgLen; i++) {
      img[i].removeEventListener("click", imgClick, false);
    }

    for (i = 0; i < anchorLen; i++) {
      anchor[i].removeEventListener("click", anchorClick, false);
    }

    document.body.removeChild(main);
    delete window.hasGrafluxeSimImg;
  };

  //add listeners
  imgClick = function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    thumbSrc = e.currentTarget.src;
    setThumb();
  };

  setThumb = function () {
    if (thumbSrc.substr(0, 5) === "data:") {
      msg.innerHTML = "This image is currently unsupported.";
      msgVisible = true;
      msg.style.setProperty("display", "block", "important");

      return;
    }

    if (msgVisible) {
      msgVisible = false;
      msg.style.setProperty("display", "none", "important");
    }

    thumb.title = thumbSrc;
    thumb.style.setProperty("background-image", "url(" + thumbSrc + ")", "important");
  };

  anchorClick = function (e) {
    e.preventDefault();

    msg.innerHTML = "Anchor tags are currently unsupported.";
    msgVisible = true;
    msg.style.setProperty("display", "block", "important");
  };

  //
  for (i = 0; i < imgLen; i++) {
    img[i].addEventListener("click", imgClick, false);
  }

  for (i = 0; i < anchorLen; i++) {
    anchor[i].addEventListener("click", anchorClick, false);
  }

  //add children
  main.appendChild(gx);
  main.appendChild(msg);
  main.appendChild(thumb);
  main.appendChild(btnSearch);
  main.appendChild(btnCancel);
  document.body.appendChild(main);
}());
