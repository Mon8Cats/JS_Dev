function b() {
  //var myVar;
  console.log("In b():", myVar);
}

function a() {
  var myVar = 2;
  console.log("In a():", myVar);
  b();
}

function x() {
  function y() {
    console.log("In y():", myVar);
  }

  var myVar = 2;
  y();
}

var myVar = 999;
console.log("In Gloval():", myVar);
//a();
x();
console.log("In Gloval():", myVar);

var myElem = document.getElementById("myInput");
myElem.innerHTML = "Hello Steve";
