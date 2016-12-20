/**
 * @author Leandro Silva | Grafluxe, 2016
 * @license MIT
 */

/* jshint -W107 */

"use strict";

let fs = require("fs"),
    filePath = "./similar-imgs-bmk.js",
    fileData = fs.readFileSync(filePath);

fileData = "javascript:" + String(fileData).replace(/\n/g, "") + "void(0);";

fs.writeFileSync(filePath, fileData);
