let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
            console.log('Квартиру успішно додано');
        } else {
            console.log('Досягнуто максимальну кількість квартир у будинку.');
        }
    }
}

const person1 = new Person('Джон', 'male');
const person2 = new Person('Аніта', 'female');
const person3 = new Person('Аліна', 'female');

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);
