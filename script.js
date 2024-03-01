//--------------------------------------- 1 задание
let li1 = document.querySelectorAll('#li1')
let li2 = document.querySelectorAll('#li2')
let li3 = document.querySelectorAll('#li3')
let li4 = document.querySelectorAll('#li4')

let list = [li1.value, li2.value, li3.value, li4.value]

console.log(list)



// -------------------------------------------------------- 2 задание




let json='["user1","user2","user3","user4","user5"]'

json= JSON.parse(json)
console.log(json)

//----------------------------------------Задание 5.
let name = document.querySelector('#name')
let lastname = document.querySelector('#lastname')
let patronymic = document.querySelector('#otchestvo')


localStorage.setItem('name', [name]);
localStorage.setItem('lastname', [lastname]);
localStorage.setItem('patronymic', [patronymic]);
//------------------------------------ 6
let inp1 = document.querySelector('#inp1')
let inp2 = document.querySelector('#inp2')
let inp3 = document.querySelector('#inp3')
let btn = document.querySelector('#btn')




btn.addEventListener('click',()=> {
    localStorage.setItem('inps', [inp1.value, inp2.value, inp3.value]);
    if(inp1.value==0|| inp2.value==0||inp3.value==0){
        let a = (localStorage.getItem('inps'));
        inp1 = a

    }
})