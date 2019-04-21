// задание №1
/*
пример 1:
let a = 1, b = 1, c, d;
c = ++a;
alert(c);
ответ = 2 т.к. выражение "c = ++a" это "c = a + 1"

пример 2:
d = b++;
alert(d);
ответ = 1 т.к. d равен значению b до того как к нему прибавится 1, и b была равна 1.

пример 3:
c = (2 + ++a);
alert(c);
ответ = 5 т.к. к 2 прибавляется а = 3 (изначально была равна 1. потом в первом примере мы прибавили 1 и в этом примере еще прибавили 1) 

пример 4:
d = (2 + b++);
alert(d);
ответ = 4 т.к. к 2 прибавляется предыдущее значение (до прибавления 1) b равное 2 (из выражения в примере 2)

alert(a);
ответ = 3 т.к. a изначально была равна 1. потом в первом примере мы прибавили 1 и в третьем примере еще прибавили 1) 

alert(b);
ответ = 3 т.к. b изначально была равна 1 , потом во втором примере прибавили 1, и в четвертом примере еще прибавили 1)

*/

// задание №2

/*
let a = 2;
let x = 1 + (a *= 2);
ответ: х  = 5 т.к. (a *= 2) это a = a * 2
*/

// задание № 3

let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
if (a >= 0 && b >= 0) {
	alert("Разность чисел равна: " + (a - b));
} else if (a < 0 && b < 0) {
	alert("Произведение чисел равно: " + (a * b));
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
	alert("Сумма чисел равна: " + (a + b));
} 


// задание № 4
// не понятно задание

function sum(num1, num2) {
	return num1 + nam2;
}

function difference(num1, nam2) {
	return num1 - num2;
}

function multiply(num1, nam2) {
	return num1 * num2;
}

function divide(num1, nam2) {
	if (nam2 === 0) {
		alert ("На ноль делить нельзя")
	} else return num1 / num2;
}



// задание #5

function mathOperation(arg1, arg2, operation) {
	switch (mathOperation) {
		case "sum": 
			return arg1 + arg2;
		case "difference":
			return arg1 - arg2;
		case "multiply":
			return arg1 * arg2; 
		case "divide":
			return arg1 / arg2;
	}
}































