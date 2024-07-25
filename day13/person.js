export const person = {
    fname: "John",
    lname: "Dee",
    age: "24",
    intro() {
        console.log(`Hi! My name is ${this.fname} ${this.lname}.`);
    }
}