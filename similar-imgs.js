/**
 * @author Leandro Silva | Grafluxe
 * @license MIT
 *
 * Commiting this code, which was originally developed
 * in 2013, for the historical reasons.
 */

/* jslint devel:true */

"use strict";

var imgs = document.getElementsByTagName("img"),
    len = imgs.length,
    modalDiv;

function btn(targ, txt) {
    var btn = document.createElement("button");

    btn.style.width = "100px";
    btn.innerHTML = txt;

    targ.appendChild(btn);

    return btn;
}

function modal(imgSrc) {
    if(! modalDiv) {
        var imgCont,
            txtCont,
            img;

        modalDiv = document.createElement("div");

        modalDiv.style.backgroundColor = "#F00";
        modalDiv.style.width = "450px";
        modalDiv.style.height = "150px";
        modalDiv.style.position = "fixed";
        modalDiv.style.top = "50%25";
        modalDiv.style.marginTop = "-100px";
        modalDiv.style.left = "50%25";
        modalDiv.style.marginLeft = "-250px";
        modalDiv.style.padding = "25px";
        modalDiv.style.zIndex = 1000000;

        imgCont = document.createElement("div");

        imgCont.style.width = imgCont.style.height = "150px";
        imgCont.style.border = "1px solid #FFF";
        imgCont.style.cssFloat = "left";
        imgCont.style.textAlign = "center";

        modalDiv.appendChild(imgCont);

        img = document.createElement("img");

        img.style.maxWidth = img.style.maxHeight = "100%25";
        img.src = imgSrc;

        imgCont.appendChild(img);

        txtCont = document.createElement("div");

        txtCont.style.width = "285px";
        txtCont.style.height = "150px";
        txtCont.style.border = "1px solid #000";
        txtCont.style.cssFloat = "left";
        txtCont.style.marginLeft = "10px";
        txtCont.style.color = "#FFF";
        txtCont.style.textAlign = "center";

        txtCont.innerHTML = "Are you sure you want to search for this image?";

        btn(txtCont, "Go").onclick = function () {
      window.open("http://images.google.com/searchbyimage?image_url=" + imgSrc, "_blank");
    };

        btn(txtCont, "Cancel").onclick = function () {
      modalDiv.style.display = "none";
    };

        modalDiv.appendChild(txtCont);

        document.body.appendChild(modalDiv);
    }else {
        modalDiv.style.visibility = (modalDiv.style.visibility === "hidden" ? "visible" : "hidden");
    }
}

function onImgClick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    if(e.target.src.indexOf("data:") === 0) {
        alert("Not a valid image.");
    }else {
        modal(e.target.src);
    }

}

for(var i = 0; i < len; i++) {
    imgs[i].addEventListener("click", onImgClick, false);
}
