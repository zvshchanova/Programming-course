const pet = {
    pet: "Кот",
    name: "Пушок",
    age: 10,
    color: "белый",
    temperament() {
        if (this.age < 5) {
            this.young = "молодой";
            return "игривый";
        } else {
            this.young = "взрослый";
            return "спокойный";
        }
    }
};
export default pet;