const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
window.onload = function () {
  var rect = document.getElementById("rectangale");
  var oval = document.getElementById("oval");
  var triangle = document.getElementById("triangle");

  var board = document.getElementById("maindiv");
  //******************************load */

  var loadButton = document.getElementById("load");
  loadButton.addEventListener("click", loadInitial);

  //*****************save */

  var saveButton = document.getElementById("save");
  saveButton.addEventListener("click", saveInitial);

  //************color menu */
  var colors = document.getElementById("colors");
  colors.addEventListener("click", colorMenu);

  var colors = document.getElementById("background-colors");
  colors.addEventListener("click", colorMenu);

  //***********************color change */
  var colortable = document.getElementsByTagName("table");
  colortable[0].addEventListener("click", colorChange);

  //************************delete */
  var delButton = document.getElementById("delete");
  delButton.addEventListener("click", delele);
  //**********************flag for mouse drag events
  var flag = false;

  oval.addEventListener("click", function (event) {
    createRandom("oval");
  });

  rect.addEventListener("click", function (event) {
    createRandom("rectangale");
  });
  triangle.addEventListener("click", function (event) {
    createRandom("triangle");
  });
  function createRandom(shape) {
    var randomObj = {};
    randomObj["class"] = shape;
    randomObj["width"] = randomSize();
    randomObj["height"] = randomSize();
    randomObj["left"] = randomPositionWidth(parseInt(randomObj["width"]));
    randomObj["top"] = randomPositionHeight(parseInt(randomObj["height"]));
    randomObj["color"] = randomColor(shape);
    displayRandom(randomObj);
  }

  //saved option to displsy

  var selectmenu = document.getElementsByTagName("select");
  var itemslist = localStorage;
  console.log(itemslist);

  for (item in itemslist) {
    var newoption = document.createElement("option");
    newoption.innerHTML = item;
    console.log(item);
    selectmenu[0].appendChild(newoption);
  }

  var saveInnerButton = document.getElementById("savebutton");
  saveInnerButton.addEventListener("click", saveOperation);

  var loadInnerButton = document.getElementById("loadbutton");
  loadInnerButton.addEventListener("click", loadOperation);
};
// main object that saves all the data
var bigObj = {};
var board = document.getElementById("maindiv");

function displayRandom(object) {
  var newShape = document.createElement("div");
  board.appendChild(newShape).className = object["class"];
  newShape.style.background = object["color"];
  newShape.style.height = object["height"];
  newShape.style.width = object["width"];
  newShape.style.top = object["top"];
  newShape.style.left = object["left"];
  createCorners(newShape);
}

function saveObject() {
  var canvas = document.getElementById("maindiv");

  var recToSave = document.getElementsByClassName("rectangale");

  for (var i = 0; i < recToSave.length; i++) {
    saveObj = {};
    saveObj["class"] = recToSave[i].className;
    saveObj["left"] = recToSave[i].style.left;
    saveObj["top"] = recToSave[i].style.top;
    saveObj["height"] = recToSave[i].style.height;
    saveObj["width"] = recToSave[i].style.width;
    saveObj["color"] = recToSave[i].style.backgroundColor;
    bigObj[i] = saveObj;
  }

  var continiue = recToSave.length;
  var ovalToSave = document.getElementsByClassName("oval");

  for (var i = 0; i < ovalToSave.length; i++) {
    var saveObj = {};
    saveObj["class"] = ovalToSave[i].className;
    saveObj["left"] = ovalToSave[i].style.left;
    saveObj["top"] = ovalToSave[i].style.top;
    saveObj["height"] = ovalToSave[i].style.height;
    saveObj["width"] = ovalToSave[i].style.width;
    saveObj["color"] = ovalToSave[i].style.backgroundColor;
    bigObj[continiue] = saveObj;
    continiue++;
  }
}
function saveNotification(note) {
  document.getElementById("savediv").classList.toggle("hidetable");
  document.getElementById("savenote").classList.toggle("hidetable");
  document.getElementById("savenote").innerHTML = note + " saved";
  setTimeout(function () {
    document.getElementById("savenote").classList.toggle("hidetable");
    document.getElementById("blackdiv").classList.toggle("hidetable");
  }, 1000);
}

function saveOperation(event) {
  var filename = document.getElementById("saveinput").value;
  if (filename == "") {
    alert("Please enter a valid file name");
    localStorage.clear();
  } else {
    saveObject();
    localStorage[filename] = JSON.stringify(bigObj);

    //adder on new file names to the load select
    var select = document.getElementsByTagName("select");
    var newOption = document.createElement("option");
    newOption.value = filename;
    newOption.innerHTML = filename;
    select[0].appendChild(newOption);

    saveNotification(filename);
  }
}
function loadOperation(event) {
  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }

  var selected = document.getElementById("select").value;

  var fileToOpen = JSON.parse(localStorage[selected]);

  for (shape in fileToOpen) {
    displayRandom(fileToOpen[shape]);
  }
  loadInitial();
}
function saveInitial(event) {
  document.getElementById("blackdiv").classList.toggle("hidetable");
  document.getElementById("savediv").classList.toggle("hidetable");
  var span = document.getElementById("savespan");
  span.addEventListener("click", saveInitial);
}

function loadInitial(event) {
  document.getElementById("blackdiv").classList.toggle("hidetable");
  document.getElementById("loaddiv").classList.toggle("hidetable");
  var span = document.getElementById("loadspan");
  span.addEventListener("click", loadInitial);
}

function resize(element) {
  window.event.stopPropagation();
  var shape = this.parentElement;
  var oldX = window.event.clientX || window.event.touches[0].clientX;
  var oldY = window.event.clientY || window.event.touches[0].clientY;
  document.ontouchmove = function (e) {
    var newX = e.touches[0].clientX - oldX;
    var newY = e.touches[0].clientY - oldY;
    if (element.target.classList.value == "rb controler controler-on") {
      shape.style.width = shape.offsetWidth + newX + "px";
      shape.style.height = shape.offsetHeight + newY + "px";
      oldX = e.touches[0].clientX;
      oldY = e.touches[0].clientY;
    } else if (element.target.classList.value == "lb controler controler-on") {
      shape.style.width = shape.offsetWidth - newX + "px";
      shape.style.height = shape.offsetHeight + newY + "px";
      shape.style.left = shape.offsetLeft + newX + "px";
      oldX = e.touches[0].clientX;
      oldY = e.touches[0].clientY;
    } else if (element.target.classList.value == "rt controler controler-on") {
      shape.style.width = shape.offsetWidth + newX + "px";
      shape.style.height = shape.offsetHeight - newY + "px";
      shape.style.top = shape.offsetTop + newY + "px";
      oldX = e.touches[0].clientX;
      oldY = e.touches[0].clientY;
    } else if (element.target.classList.value == "lt controler controler-on") {
      shape.style.width = shape.offsetWidth - newX + "px";
      shape.style.height = shape.offsetHeight - newY + "px";
      shape.style.top = shape.offsetTop + newY + "px";
      shape.style.left = shape.offsetLeft + newX + "px";
      oldX = e.touches[0].clientX;
      oldY = e.touches[0].clientY;
    }
  };

  document.onmousemove = function (e) {
    var newX = e.clientX - oldX;
    var newY = e.clientY - oldY;
    if (element.target.classList.value == "rb controler controler-on") {
      shape.style.width = shape.offsetWidth + newX + "px";
      shape.style.height = shape.offsetHeight + newY + "px";
      oldX = e.clientX;
      oldY = e.clientY;
    } else if (element.target.classList.value == "lb controler controler-on") {
      shape.style.width = shape.offsetWidth - newX + "px";
      shape.style.height = shape.offsetHeight + newY + "px";
      shape.style.left = shape.offsetLeft + newX + "px";
      oldX = e.clientX;
      oldY = e.clientY;
    } else if (element.target.classList.value == "rt controler controler-on") {
      shape.style.width = shape.offsetWidth + newX + "px";
      shape.style.height = shape.offsetHeight - newY + "px";
      shape.style.top = shape.offsetTop + newY + "px";
      oldX = e.clientX;
      oldY = e.clientY;
    } else if (element.target.classList.value == "lt controler controler-on") {
      shape.style.width = shape.offsetWidth - newX + "px";
      shape.style.height = shape.offsetHeight - newY + "px";
      shape.style.top = shape.offsetTop + newY + "px";
      shape.style.left = shape.offsetLeft + newX + "px";
      oldX = e.clientX;
      oldY = e.clientY;
    }
  };
  this.addEventListener("mouseup", function () {
    document.onmousemove = null;
  });
  this.addEventListener("touchend", function () {
    document.ontouchmove = null;
    document.onmousemove = null;
  });
}

function createCorners(element) {
  var LT = document.createElement("div");
  var RT = document.createElement("div");
  var LB = document.createElement("div");
  var RB = document.createElement("div");
  element.appendChild(LT).className = "lt controler";
  element.appendChild(RT).className = "rt controler";
  element.appendChild(LB).className = "lb controler";
  element.appendChild(RB).className = "rb controler";

  var pickedCorners = document.getElementsByClassName("controler");
  for (var i = 0; i < pickedCorners.length; i++) {
    pickedCorners[i].addEventListener("mousedown", resize);
    pickedCorners[i].addEventListener("touchstart", resize);
  }
  cornerEvents(element);
}

function cornerEvents(element) {
  clickEventShape(element);
  mouseDownEventShape(element);
  mouseUpEventShape(element);
}

function mouseUpEventShape(element) {
  element.addEventListener("mouseup", function () {
    flag = false;
  });
}

function mouseDownEventShape(element) {
  //**move */
  element.addEventListener("mousedown", function (e) {
    var diffx = parseInt(window.event.clientX - element.offsetLeft);
    var diffy = parseInt(window.event.clientY - element.offsetTop);
    flag = true;

    if (this.classList.contains("marked")) {
      document.onmousemove = function () {
        if (flag) {
          console.log(diffx, " ", diffy);
          var x = window.event.clientX;
          var y = window.event.clientY;
          var left = x - diffx;
          var top = y - diffy;
          if (left > 0 && top > 0) {
            element.style.left = left + "px";
            element.style.top = top + "px";
          }
        }
      };
    }
  });
  element.addEventListener("touchstart", function (e) {
    var diffx = parseInt(window.event.touches[0].clientX - element.offsetLeft);
    var diffy = parseInt(window.event.touches[0].clientY - element.offsetTop);
    flag = true;

    if (this.classList.contains("marked")) {
      document.ontouchmove = function () {
        if (flag) {
          console.log(diffx, " ", diffy);
          var x = window.event.touches[0].clientX;
          var y = window.event.touches[0].clientY;
          var left = x - diffx;
          var top = y - diffy;
          if (left > 0 && top > 0) {
            element.style.left = left + "px";
            element.style.top = top + "px";
          }
        }
      };
    }
  });
  element.addEventListener("mouseup", function () {
    document.onmousemove = null;
  });
  element.addEventListener("touchend", function () {
    document.ontouchmove = null;
  });
}
function clickEventShape(element) {
  element.addEventListener("click", function (event) {
    var children = this.children;
    var corners = document.getElementsByClassName("controler-on");
    if (!event.ctrlKey) {
      if (!checkCorners(this, corners)) {
        removeCorner();
        removeMarked();
      }
    }
    this.classList.toggle("marked");

    for (var i = 0; i < children.length; i++) {
      children[i].classList.toggle("controler-on");
    }
  });
}
function colorMenu(event) {
  this.getElementsByClassName("color-table")[0].classList.toggle("hidetable");
}
function colorChange(event) {
  var colorpic = event.target.style.backgroundColor;
  var marked = document.getElementsByClassName("marked triangle");
  if (marked && marked.length > 0) {
    document.getElementsByClassName("marked")[0].style.background =
      "linear-gradient(to right bottom, transparent 0%, transparent 50%," +
      colorpic +
      " 50%, " +
      colorpic +
      " 100%)";
  } else {
    document.getElementsByClassName("marked")[0].style.background = colorpic;
  }

  // for (var i = 0; i < marked.length; i++) {
  //   marked[i].style.background = colorpic;
  // }
}

function delele(event) {
  var board = document.getElementById("maindiv");
  var marked = document.getElementsByClassName("marked");
  for (var i = 0; 0 < marked.length; i++) {
    board.removeChild(marked[0]);
  }
}
function checkCorners(element, corners) {
  var cildCorner = element.children;

  for (var i = 0; i < cildCorner.length; i++) {
    if (cildCorner[i] !== corners[i]) {
      return false;
    } else {
      return true;
    }
  }
}

function removeMarked(element) {
  var marked = document.getElementsByClassName("marked");

  for (var i = 0; i < marked.length; i++) {
    marked[0].classList.remove("marked");
  }
}
function removeCorner(element) {
  var cornerToOff = document.getElementsByClassName("controler-on");

  var len = cornerToOff.length;
  for (var i = 0; i < len; i++) {
    cornerToOff[0].classList.toggle("controler-on");
  }
}

function randomColor(shape) {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var color = "rgb(" + r + "," + g + "," + b + ")";
  if (shape == "triangle") {
    color =
      "linear-gradient(to right bottom, transparent 0%, transparent 50%," +
      color +
      " 50%, " +
      color +
      " 100%)";
  }

  return color;
}
function randomSize() {
  var ran = Math.floor(Math.random() * 350 + 50);
  var size = ran + "px";
  return size;
}

function randomPositionHeight(max) {
  var x = Math.floor(Math.random() * (window.screen.height - max));
  var size = x + "px";
  return size;
}
function randomPositionWidth(max) {
  var x = Math.floor(Math.random() * (window.screen.width - max));
  var size = x + "px";
  return size;
}
