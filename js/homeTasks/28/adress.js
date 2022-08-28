// 1й модуль- класс Address. Состоит из страны, города, улицы и номера дома.  
// const adress = {
// };
// export default adress;

export default class Adress {
    constructor(country, city, street, hn ){
        this.country = country;
        this.city = city;
        this.street = street;
        this.hn = hn;
    }
    getAdress() {
        return {country:  this.country, city: this.city, street: this.street, hn: this.hn}
    }
};