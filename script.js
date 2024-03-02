//--------------------------------------- 1 задание***************
let items = document.querySelectorAll('.item')
let listt = document.querySelector('#listt')

listt.value = JSON.stringify(listt)
console.log(listt)

let list = [li1.value, li2.value, li3.value, li4.value]
list = JSON.stringify(list)
console.log(list)



// -------------------------------------------------------- 2 задание




let json = '["user1","user2","user3","user4","user5"]'
json = JSON.parse(json)
json.push("user6")
console.log(json)

//----------------------------------------------------------------3


let job = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

job = JSON.parse(job)
job.push({
	"name": "user4",
	"age": 400,
	"salary": 211212
})
console.log(job)
//---------------------------------------------------4
let users = '["user1","user2","user3","user4","user5"]';

users = JSON.parse(users)
console.log(users)

//----------------------------------------Задание 5.////////////////
let name = document.querySelector('#name')
let lastname = document.querySelector('#lastname')
let patronymic = document.querySelector('#otchestvo')

name = JSON.stringify(name.value)
lastname = JSON.stringify(lastname.value)
patronymic = JSON.stringify(patronymic.value)


localStorage.setItem('name', [name]);
localStorage.setItem('lastname', [lastname]);
localStorage.setItem('patronymic', [patronymic]);
//------------------------------------ 6**********
let inp1 = document.querySelector('#inp1')
let inp2 = document.querySelector('#inp2')
let inp3 = document.querySelector('#inp3')
let btn = document.querySelector('#btn')




btn.addEventListener('click', () => {
	localStorage.setItem('inps', [inp1.value, inp2.value, inp3.value]);

})
if (inp1.value == 0 || inp2.value == 0 || inp3.value == 0) {
	let a = localStorage.getItem('inps');
	a = JSON.stringify(a)


	inp1.value = a[0]
	inp2.value = a[1]
	inp3.value = a[2]
}