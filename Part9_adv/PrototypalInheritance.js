function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`hello, I am ${this.name}`);
}

let Me = new Person("Shlok");
Me.greet();