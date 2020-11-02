// задача №1

let checkNum = prompt('введите число', '');

if (+checkNum == 10){
    console.log('верно');
}else{
    console.log('не верно');
}

// задача №2

let num = 3;
alert(num);

// задача №3
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).Через функцию

let a = 10;
let b = 2;

document.write(a+b,' ',a-b,' ', a*b,' ', a/b); //а можно без функции? ответы то в итоге вывелись на сайте

// задача №4
//закомментила, чтобы код не ломать
// let a = 1, b = 1;
// let c = ++a; // 2 префиксная форма возвращает новое значение
// let d = b++; // 1 так же увеличивает на 1, НО возвращает старое значение

// задача №5

let numFive = prompt('введите число', '');

if(+numFive>0){
    alert(1);
}else if(+numFive<0){
    alert(-1);
}else{
    alert(0);
}

// задача №6
var numa = 47;
numa+=7; //numa = numa + 7;
numa-=18; //numa = numa - 18;
numa*=10; //numa = numa * 10;
numa/=15; //numa = numa / 15;
console.log(numa); //по итогу получаем 24 - это результат всех вычислений. Тоесть (47+7-18)*10/15

// задача №7
let YourName = prompt('введите имя','');
let passWord = prompt('придумайте пароль','');
let yearsYouSecret = prompt('ваш возраст','');

function checkUser(){
    if(+yearsYouSecret>=18 && passWord!='' && YourName!=''){
        console.log(`${YourName}, ваш возраст: ${yearsYouSecret} и пароль: ${passWord} были сохранены`);
    }else{
        console.log(`что-то не так`);
    }
}

checkUser();