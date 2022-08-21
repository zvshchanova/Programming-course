let username = "Bob";

function sayHi(name) {
    console.log(`Привет, ${username}!`);
}
//sayHi("Bobi");

// стрелочные функции
const arrsay = (name) => {
    console.log(`Привет, ${name}!`);
};
// or
const arrsay1 = (name) => console.log(`Привет, ${name}!`);
//arrsay1("Marki");
// or
const sum = (a, b) => a + b;
//console.log(sum(7,3));

// массивы методы push, pop, shift, unshift, splice
const auto = ['Audi', 'BMW', 'Ford'];
//console.log(auto);

auto.push('Nissan'); // push - добавить элемент в массив
//console.log(auto);

auto.splice(2, 1); // удаляет эл с 2 эл 1 шт
//console.log(auto);

// циклы

for (let i = 0; i < auto.length; i++) {
    //    console.log(auto[i]);
};


for (let item of auto) { //for of
    console.log(item);
}
// auto.forEach(function (item,index){
//     console.log(`${item} : ${index}`);
// });
//or
// function printitem(item,index){
//     console.log(`${item} :: ${index}`);
// };
// auto.forEach(printitem);
auto.forEach((item, index) => console.log(`${item} :: ${index}`));

// обьекты
// const person = {
//     username:'Mark',
// age:30,
// isMarried:false,
// sayHi: function (yourname){
//     console.log(`Привет, ${yourname}! Меня зовут ${this.username}`);
// }}
// console.log(person["name"]);
// person.profession = 'JS developer';  // добавляем объект
// console.log(person);
// delete person.age;

// person.sayHi("Bob");
//for in - для объектов
// for (let key in person){  // обход по ключам
//     console.log(key, ':', person[key]);
// }
// классы
class Person {
    constructor(userName, age, isMarried) {
        this.userName = userName;
        this.age = age;
        this.isMarried = isMarried;
    }
    sayHi(name) {
        console.log(`Привет, ${name}! Меня зовут ${this.userName}`);
    }
}
const person1 = new Person('John', 45, true);
const person2 = new Person('Anna', 44, true);
person1.sayHi('Alex');
