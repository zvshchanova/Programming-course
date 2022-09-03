// 1й модуль- класс Address. Состоит из страны, города, улицы и номера дома.  
export default class Adress {
    constructor(country, city, street, hn) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.hn = hn;
    }
    adress() {
        return {
            country: this.country,
            city: this.city,
            street: this.street,
            hn: this.hn
        }
    }
};