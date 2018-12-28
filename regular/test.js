let content = 'Boib is my broother'
let exp = /o{2}/
let result = content.match(exp)
// console.log(result)

let content2 = '<H1>Chapter 1 bs bww - 介arrr绍正则表达式</H1><a></a>'
let exp2 = /\b([a-z]+)/g;
let result2 = content2.match(exp2)
console.log(result2)

var str = "http://www.runoob.com:80/html/html-tutorial.html";
var patt1 = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
arr = str.match(patt1);
console.log(arr)
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}