/*


// задание № 1

let number = String(prompt("Введите число от 0 до 999"));

let arr = {
	objNumber: {},
		
	numberInArr() { 
			if(number > 99 && number < 1000) {
			arr.objNumber.hundred = number[i=0];
			arr.objNumber.tens = number[i=1];
			arr.objNumber.ones = number[i=2];
			}
			else if(number > 9 && number < 99) {
			arr.objNumber.hundred = 0;	
			arr.objNumber.tens = number[i=0];
			arr.objNumber.ones = number[i=1];
			}
			else if(number >= 0 && number < 9) {
			arr.objNumber.hundred = 0;	
			arr.objNumber.tens = 0;
			arr.objNumber.ones = number[i=0];
			}
			else alert('Неверно указано число')
		} 
			
}
arr.numberInArr();
console.log(arr.objNumber);

*/



/*

// задание № 2

let good = [{name: 'apple', price: 10},
			{name: 'pear', price: 11},
			{name: 'orange', price: 15},
			{name: 'banana', price: 8}
			];

let basket = {
	
	goodList: [],
	sumPrice: 0,
	countPrice: 0,
	
	countTotalPrice() {
		for(let i = 0; i < good.length; i++) {
			//productsPrice.push(basket[i].price);
			this.sumPrice += basket.goodList[i].price * basket.goodList[i].count;
			this.countPrice += basket.goodList[i].count;
		}
	},
	countTotalNumber() {
		for(let k = 0; k < good.length; k++) {
			if(k % 2) {
				this.goodList[k].count = 2
			} else this.goodList[k].count = 1
		}
	},
	putProduct() {
		for(let i = 0; i < good.length; i++) {
			this.goodList.push(good[i]);
		}
	}
};
basket.putProduct();
basket.countTotalNumber();
basket.countTotalPrice();
console.log(basket.goodList);
console.log(basket.sumPrice);
console.log(basket.countPrice);


*/



// задание №3

папка lesson









































