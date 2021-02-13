"use strict";

// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. 
//Тем не менее, она влюблена в пользователя с именем “Mark”, и хотела бы поприветствовать его немного 
//иначе.
// Помогите ей)
// Пример вызовов:
// sayHello(“Oleg”); // Hello, Oleg!
// sayHello(“Viktor”); // Hello, Viktor!
// sayHello(“Mark”); // Hi, Mark!


function sayHello(name){
    if (name == "Mark"){
        console.log(`Hi, ${name}, dear`);
    }else{
        console.log(`Hello, ${name}`);
    }
}
sayHello('Oleg');
sayHello('Viktor');
sayHello('Mark');

// Задача «Hello World» для функций :)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
// Пример вызовов:
// min(2, 5)
// min(3, -1)
// min(1, 1) 

function min(a,b,c){
    let z = Math.min(a,b,c);
    console.log(z);
}

min(2,5,6);
min(3,-1,5);
min(1,1,1);

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз
// и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...*1 = 1

function pow(x,n){
    let z = Math.pow(x,n);
    console.log(z);
}
pow(3,2);
pow(3,3);
pow(1,100);

// Напишите функцию isEven(n), которая принимает один параметр, число, и возвращает, четное ли оно.
// То есть функция может возвращать два значения: четное или нечетное.
// isEven(4); // true
// isEven(5); // false

function isEven(n){
    if(n%2==0){
        console.log(true);
    }else{
        console.log(false);
    }
}
isEven(4);
isEven(5);

// Ваша цель - создать функцию deleteChars(str), которая удаляет первый и последний символы строки, 
//которая передается в параметр, и возвращает новую строку без этих символов.
// deleteChars(“Hello”); // ell
// deleteChars(“A”); // пустая строка

function deleteChars(str){
    if(str.length==1){
        console.log(str.substring(1));
    }else{
        console.log(str.substring(1, str.length - 1));
    }
}
deleteChars('Hello');
deleteChars('A');//тут вопрос, не знаю, почему не работает


// Американцы - странные люди: в их зданиях первый этаж - это нулевой этаж, и нет 13-го этажа (суеверия).
// Напишите функцию convertFloor(floor), которая получает американский этаж (передается как целое число),
// и возвращает реальный.
// Кроме того, ваша функция должна работать и на подвальных этажах.
// convertFloor(-1) // -1
// convertFloor(2) // 3
// convertFloor(2) // 3
// convertFloor(0) // 1
// convertFloor(12) // 13
// convertFloor(14) // 14

function convertFloor(floor){
    floor = +prompt("Введите этаж");
    if(floor >= 0 && floor < 13){
        console.log(floor+1);
    }else{
        console.log(floor);
    }
}
convertFloor();


// Перепишите функцию
function convertType(value, toType){
    if (toType === 'boolean'){
        return Boolean(value);
    } else if (toType === 'string'){
        return String(value);
    } else if (toType === 'number'){
        return Number(value);
    }
}
console.log(convertType('my string', 'boolean'));


// заменив if else на конструкцию switch (convertType1)
function convertType1(value, toType){
    switch (toType){
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
            break;
    }
}
console.log(convertType1('my string', 'boolean'));


// через Function Expression (convertType2)
let convertType2 = function(value, toType){
    if (toType === 'boolean'){
        return Boolean(value);
    } else if (toType === 'string'){
        return String(value);
    } else if (toType === 'number'){
        return Number(value);
    }
}
console.log(convertType2('my string', 'number'));


// с помощью стрелочного синтаксиса (convertType3)
let convertType3 = (value, toType) => {
    if (toType === 'boolean'){
        return Boolean(value);
    } else if (toType === 'string'){
        return String(value);
    } else if (toType === 'number'){
        return Number(value);
    }
}
console.log(convertType3('my string', 'string'));


// Написать функцию transformArray(arr, index1, index2, adding), принимающий в качестве аргументов:

// arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
// index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно поменять 
//между собой местами (fpos и clfw нужно поменять местами)
//  adding - строка, которую необходимо дописать в конец к каждому элементу массива 

// и возвращающую массив с учетом указанных трансформаций.
// Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно вернуть 
//[“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]
// let oldArray = ["fngp", "kgei", "fpos", "clfw"]
function transformArray(arr, index1, index2, adding){
    arr.forEach(function(item, i, arr){
        if(i==index1){
            [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
        }
        arr[i] = arr[i] + adding;
    })
    console.log(arr);
}
transformArray(["fngp", "kgei", "fpos", "clfw"], 2, 3, "blue");



// Нужно написать функцию, в которую  мы передаем число, суммируем цифры данного числа до тех пор,
//  пока не останется одна цифра
function digitalRoot(num){
    num = prompt('задайте число');

    //разбили на массив
    if(num.length > 1){
    let arrayNum = [];
    for(let i = 0; i < num.length; i++){
        arrayNum.push(num[i]);
    }

    //преобразовали элементы в числа и сложили
    let sum = 0; //у меня без "= 0" не работает
    arrayNum.forEach(function(item, i, arrayNum){
        sum += +arrayNum[i];
    })
    console.log(sum);
    }
}

digitalRoot();



// Напишите функцию printMessage(n), которая выводит сообщения на экран каждые n секунд
function printMessage(n){
    n = prompt('введите кол-во милисекунд');
    let timerId = setInterval(n => alert('tick'), n); //https://learn.javascript.ru/
    timerId();
}
printMessage();


// Напишите функцию, которая выводит через 5 секунд на экран сообщение “прошло 5 секунд”
function timeDelayMessage(){
    alert('прошло 5 секунд');
}
setTimeout(timeDelayMessage, 5000);


// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
// начиная от from и заканчивая to.

//это была моя попытка

// function printNumbers(from, to){
//     for(let i = from; i < to; i++){
//         setInterval(function() {
//             // i++;
//             console.log(i);
//         }, 1000);
//     }
// }
// printNumbers(10, 20);

// ответ, который я в итоге нагуглила https://learn.javascript.ru/task/output-numbers-100ms
function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  printNumbers(5, 10);

// http://code.mu/ru/javascript/book/prime/timers/counter-on-timer/


// По нажатию на кнопку показывать сообщение через 5 секунд, во время этих 5 секунд 
//должно появляться слово “loading”, а после появления сообщения - скрываться
let elem = document.getElementById("elem-content");
let elLoading = document.getElementById("loading");

function loading(){
    console.log('loading');
    elLoading.style.display = "block";
    setTimeout(() => elLoading.style.display = "none", 5000);
    setTimeout(() => alert('спасибо за ожидание'), 5500);
}
