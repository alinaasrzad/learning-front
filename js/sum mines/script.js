// // function number() {
// //   var a = "3";
// //   var b = "8";
// //  var c = a ;
// // var b = c ;
// // var a = b;

// //   console.log("a is" + a);
// //   console.log("b is" + b);
// // }
// function show(){
// alert("hi")
// };
//  console.log(document.body.children[0].classList);
//  let test1 = document.querySelector(".up");
//  test1.classList.add("el");
//  test1.innerHTML="kim";
//  test1.classList.remove("up");

function show() {
  let result = document.getElementById("result");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  num1 = +num1;
  num2 = +num2;

  let Sum = num1 + num2;

  result.innerHTML = Sum;
}
function mines() {
  let result = document.getElementById("result");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let min = num1 - num2;
  result.innerHTML = min;
}
