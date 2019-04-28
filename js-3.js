// задание № 1

let a = [
 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

let b = a.slice();

console.log(a);
console.log(b);

////////

let aa = [
 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

let bb = [].concat(aa);

console.log(aa);
console.log(bb);

////////

let aaa = [
 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

let bbb = JSON.parse(JSON.stringify(aaa));

console.log(aaa);
console.log(bbb);




// задание № 2


var basket = [];

var product1 = {};
var product2 = {};
var product3 = {};
var product4 = {};

product1.title = 'apple';
product1.price = 10;
product2.title = 'pear';
product2.price = 11;
product3.title = 'orange';
product3.price = 15;
product4.title = 'banana';
product4.price = 8;

basket.push(product1);
basket.push(product2);
basket.push(product3);
basket.push(product4);

console.log(basket);
console.log(basket.length);

var sumPrice = 0;
var productsPrice = [];

for(let i = 0; i < basket.length; i++) {
	productsPrice.push(basket[i].price);
	sumPrice += productsPrice[i];
	
}
console.log(productsPrice);
console.log(sumPrice);



//задание № 3


for(let j = 0; j < 10; j++, console.log(j-1)) {
	
}


// задание № 4

let pyramid = "";
 for(let i = 1; i < 20; i++) {
   pyramid += "*";
   console.log(pyramid);
 }









































