//THIS and binding context

const Test = {
    name: "shlok",
     greet() {
        console.log(`Hi, I am ${this.name}`);  
    }
}

Test.greet();

const AnotherVar = Test.greet;
AnotherVar();

const AnotherVar2 = Test.greet.bind({name: "Aaru"});
AnotherVar2()