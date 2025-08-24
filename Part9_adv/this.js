//THIS and binding context

const Test = {
    name: "shlok",
     greet() {
        console.log(`Hi, I am ${this.name}`);  
    }
}

Test.greet(); //When called here 'this' gives us the context.

// const AnotherVar = Test.greet; //Here the context is not given
// AnotherVar();

const AnotherVar2 = Test.greet.bind({name: "Aaru"}); //Here we make sure to bind the context
AnotherVar2()