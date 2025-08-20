const person = {
    name: "shlok",
    introduce() {
        console.log(`Hi, I am ${this.name}`);
    }
}

const callperson = person.introduce.bind({name: "aaru"});
callperson();