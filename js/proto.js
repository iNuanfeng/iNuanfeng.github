function Parent() {}
function Child() {}

Child.prototype = new Parent();
var kitty = new Child();

console.log(Child.prototype === new Parent());  // true -> false
console.log(Child.__proto__ === Parent.__proto__);  // true
console.log(kitty.constructor === Child); // false
console.log(kitty.__proto__ === Child.prototype); // true
console.log(Parent.prototype === Child.prototype);  // false
