// 2й модуль- Класс Citizen (гражданин). 
//У него есть такие свойства как: Имя, Фамилия, возраст, зарегистрирован ли человек (boolean), 
//Адрес (объект адрес из модуля 1) и функция register(address), которая принимает объект адрес,
//которая регистрирует человека если он не зарегистрирован по указанному адресу. (Соответственно необходимо импортировать модуль Address)

import Adress from "./adress.js";
class Citizen {
    constructor(firstName, lastName, age, registered) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.registered = registered; 
    }
        register(adress) {
                this.adress = adress;             
             };
        };
export default Citizen;