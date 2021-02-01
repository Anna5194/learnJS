"use strict";

let login = confirm('wanna to login?');
let youPassword;

function letLogin(){
    while(login){
        youPassword = prompt('enter password');
        if(youPassword===''||typeof youPassword==='object'){
            alert('no correct')
            break;
        }else{
            alert('login') 
            break;
        }
    }
}


if(login){
    letLogin();
}else{
    let sure = confirm('are you sure');
    if(!sure){
        login=!login;
        letLogin();
    }else{
        let arr=['Let it go', 'Show yourself','Into the unknown'];
        let userСhoice = +prompt('why? \n 1.Let it go \n 2.Show yourself \n 3.Into the unknown');

        function answerForUser(arr, userСhoice){
            if(userСhoice==0){
                alert('Что, так лень цифру написать?');
            }else{
                alert(`Ваша любимая песня из холодного сердца ${arr[userСhoice-1]}`);
            }
        };
        answerForUser(arr, userСhoice);
    }
}