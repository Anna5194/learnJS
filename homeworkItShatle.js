"use strict";

//Создайте массив, длиной в 6 элементов, каждый из  которого больше предыдущего на 5, 
//после этого найдите среднее значение из этих чисел.

let arrOne = [1,6,11,16,21,26,31];
let sumArr = 0;

for(let i = 0; i<arrOne.length; i++){
    if(i<arrOne.length){
        sumArr = sumArr+arrOne[i];
    }
}
console.log(sumArr);

//Есть массив с неизвестным кол-вом элементов. Как вывести последний элемент?

let arrTwo = ['dfgfdg',12,true,85,"vbn"];

console.log(arrTwo[arrTwo.length-1]);
console.log(arrOne[arrOne.length-1]);

//У нас снова массив с неизвестным кол-вом элементов. 
//Напишите код, в котором предпоследнему элементу задается значение “предпоследний элемент”.
let arrThree = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

let penultNum = arrThree.length-2;
arrThree[penultNum]='предпоследний элемент';
console.log(arrThree);

// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в начало значения «Рэп» и «Регги».
// Массив в результате каждого шага:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-Ролл
// Джаз, Классика, Рок-н-Ролл
// Классика, Рок-н-Ролл
// Рэп, Регги, Классика, Рок-н-Ролл

let arrFour = ['Джаз', 'Блюз'];

console.log(arrFour);

// Добавьте в конец значение «Рок-н-Ролл»
arrFour.push("Рок-н-Ролл");
console.log(arrFour);

// Замените предпоследнее значение с конца на «Классика». 
//Код замены предпоследнего значения должен работать для массивов любой длины.
let penultNumArrFour = arrFour.length-2;
arrFour[penultNumArrFour] = "Классика";
console.log(arrFour);

// Удалите первое значение массива и выведите его alert.
alert(arrFour.shift());

// Добавьте в начало значения «Рэп» и «Регги».
arrFour.unshift("Рэп","Регги");
console.log(arrFour);

//Существует массив из какого-то количества элементов строковых данных.
// Необходимо создать новый массив из длин каждого из элементов исходного массива.
let arrFive = [];
for(let iFive = 0; iFive<arrFour.length; iFive<0){
    let newElArrFive = arrFour[iFive].length;
    arrFive.push(newElArrFive);
    iFive++;
}
console.log(arrFive);//проверить в консоли с 4-м массивом


//переписать цилк for с помощью метода forEach
let arrSix = ["Anna", 12, "Sam", 9,  "Kate", 10, "Ron", 9];
arrSix.forEach(function(item,i,arrSix) {
    if(typeof arrSix[i]==='string'){
        console.log(arrSix[i]+' - string value');
    }else{
        console.log(arrSix[i]+' - number value');
    }
});


//Необходимо создать новый массив из значений данного, которые больше 10.
let arrSeven = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
let newArrSeven = [];
arrSeven.forEach(function(item,i,arrSeven){
    if(arrSeven[i]>10){
        newArrSeven.push(arrSeven[i]);
    }
})
console.log(newArrSeven);


//Создайте калькулятор для введённых значений
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт 15.
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива
let arrLast = [];
let elArrLast = '';
let arrLastResult = 0;
// console.log(elArrLast);

while(true){
    if(typeof elArrLast ==='object'||elArrLast==15){
        break;
    }else{
        elArrLast = prompt('Введите число. Если вы хотите прекратить ввод, введите 15');
        arrLast.push(elArrLast);
    }
}

for(let i=0; i<arrLast.length; i++){
    arrLast[i]=Number(arrLast[i]);
    if(i<arrLast.length){
        arrLastResult = arrLastResult + arrLast[i];
    }
}

console.log(arrLastResult);
