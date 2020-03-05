/*
    Este ejercicio debe correr en Node.

    Crea un objeto cualquiera y agrégale algunas propiedades, todas ellas privadas.
    Elige alguna de las propiedades y prográmale un setter y un getter.
    Procura que el setter controle o valide el valor que se ingresa.
*/

//tu código va aquí vvv


class Person {
  constructor(firstname, lastname, dayBirth, monthBirth) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._dayBirth = dayBirth;
    this._monthBirth = monthBirth;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(name) {
    this._firstname = name;
  }

  get lastname() {
    return this._lastname;
  }

  set lastname(lastName) {
    this._lastname = lastName;
  }
  get dayBirth() {
    return this._dayBirth;
  }

  set dayBirth(day) {
      if(day >=1 && day <= 31){
        this._dayBirth = day;
      }else{
          console.log("Dia invalido")
      }
  }
  get monthBirth() {
    return this._monthBirth;
  }

  set monthBirth(month) {
      if(month >=1 && month <= 12){
        this._monthBirth = month;
      }else{
          console.log("Mes invalido")
      }
  }
}

let person = new Person('Mariana', 'Gonzalez', 3, 6);

console.log(person.firstname, person.lastname, person.dayBirth, person.monthBirth); // John Doe

person.firstname = 'Marian';
person.lastname = 'Romero';
person.dayBirth = -3;
person.monthBirth = "a";

console.log(person.firstname, person.lastname);

//tu código va aquí ^^^

//eof
