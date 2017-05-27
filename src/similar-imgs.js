/**
 * @author Leandro Silva | Grafluxe, 2016
 * @license MIT
 */

(function () {
  "use strict";

  if (window.simImgs) {
    return;
  }

  var VERSION = "1.0.0",
      main,
      info,
      msg,
      closeViaMsg,
      thumb,
      btnSearch,
      btnCancel,
      doc = document,
      img = doc.getElementsByTagName("img"),
      imgLen = img.length,
      anchor = doc.getElementsByTagName("a"),
      anchorLen = anchor.length,
      i,
      thumbSrc,
      msgVisible = true;

  window.simImgs = true;

  //functions
  function css(el, key, val) {
    el.style.setProperty(key, val, "important");
  }

  function div() {
    return doc.createElement("div");
  }

  function append(el, to) {
    to.appendChild(el);
  }

  function setThumb() {
    if (thumbSrc.substr(0, 5) === "data:") {
      msg.innerHTML = "This image is currently unsupported. Try another.";
      append(closeViaMsg, msg);
      msgVisible = true;
      css(msg, "display", "block");

      return;
    }

    if (msgVisible) {
      msgVisible = false;
      css(msg, "display", "none");
    }

    thumb.title = thumbSrc;
    css(thumb, "background-image", "url(" + thumbSrc + ")");
  }

  function imgClick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    thumbSrc = e.currentTarget.src;
    setThumb();
  }

  function anchorClick(e) {
    e.preventDefault();

    msg.innerHTML = "Anchor tags are currently unsupported.";
    append(closeViaMsg, msg);
    msgVisible = true;
    css(msg, "display", "block");
  }

  //set divs
  main = div();
  info = div();
  msg = div();
  closeViaMsg = div();
  thumb = div();
  btnSearch = div();

  //main
  css(main, "background", "linear-gradient(0deg, #f3cf12 50%, #feda1d 50%)");
  css(main, "color", "#333");
  css(main, "font", "bold 13px Arial, Helvetica, sans-serif");
  css(main, "position", "fixed");
  css(main, "width", "100%");
  css(main, "top", "0");
  css(main, "left", "0");
  css(main, "padding", "10px");
  css(main, "width", "97%");
  css(main, "width", "calc(100% - 20px)");
  css(main, "box-shadow", "0 0 10px #999");
  css(main, "z-index", "9999999999");
  css(main, "box-sizing", "unset");
  css(main, "opacity", "0.96");

  main.id = "sim-imgs";

  //info
  css(info, "background", "#fff");
  css(info, "border-radius", "8px");
  css(info, "width", "16px");
  css(info, "height", "16px");
  css(info, "float", "right");
  css(info, "cursor", "pointer");
  css(info, "text-align", "center");
  css(info, "padding-top", "1px");
  css(info, "font", "12px monospace");
  css(info, "margin-top", "3px");

  info.title = "Version " + VERSION;
  info.innerHTML = "i";

  info.onclick = function () {
    window.open("https://github.com/Grafluxe/similar-imgs", "_blank");
  };

  //close via msg
  css(closeViaMsg, "cursor", "pointer");
  css(closeViaMsg, "opacity", "0.3");
  css(closeViaMsg, "margin", "-30px auto 0");
  css(closeViaMsg, "line-height", "normal");
  css(closeViaMsg, "width", "30px");
  css(closeViaMsg, "padding", "6px");

  closeViaMsg.innerHTML = "[x]";

  closeViaMsg.onclick = function () {
    btnCancel.onclick();
  };

  //msg
  css(msg, "background", "linear-gradient(0deg, #f3cf12 50%, #feda1d 50%)");
  css(msg, "position", "absolute");
  css(msg, "width", "100%");
  css(msg, "height", "100%");
  css(msg, "top", "0");
  css(msg, "left", "0");
  css(msg, "text-align", "center");
  css(msg, "line-height", "6.5");

  msg.innerHTML = "Click an image to search Google for similar ones.";
  append(closeViaMsg, msg);

  //thumb
  css(thumb, "background", "#333 no-repeat center center / contain");
  css(thumb, "width", "70px");
  css(thumb, "height", "70px");
  css(thumb, "float", "left");

  //btns
  css(btnSearch, "background", "#fff");
  css(btnSearch, "width", "28%");
  css(btnSearch, "max-width", "130px");
  css(btnSearch, "height", "28px");
  css(btnSearch, "margin", "15px 0 0 5px");
  css(btnSearch, "padding", "12px 0 0 0");
  css(btnSearch, "text-align", "center");
  css(btnSearch, "cursor", "pointer");
  css(btnSearch, "float", "left");
  css(btnSearch, "box-sizing", "unset");

  btnSearch.innerHTML = "Search";

  btnCancel = btnSearch.cloneNode();

  btnCancel.innerHTML = "Cancel";

  btnSearch.onmouseover = btnCancel.onmouseover = function (e) {
    e.target.css("box-shadow", "0 0 10px #c39f00");
  };

  btnSearch.onmouseout = btnCancel.onmouseout = function (e) {
    e.target.css("box-shadow", "unset");
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

    doc.body.removeChild(main);
    delete window.simImgs;
  };

  //add listeners
  for (i = 0; i < imgLen; i++) {
    img[i].addEventListener("click", imgClick, false);
  }

  for (i = 0; i < anchorLen; i++) {
    anchor[i].addEventListener("click", anchorClick, false);
  }

  //add children
  append(msg, main);
  append(info, main);
  append(thumb, main);
  append(btnSearch, main);
  append(btnCancel, main);
  append(main, doc.body);
}());
