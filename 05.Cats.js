function solve(input){
    let cats= [];
class Cat{
    constructor(name, age){
        this.name = name
        this.age = age
       
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}

for(let cat of input){
    let [name, age] = cat.split(` `)
    let currCat = new Cat(name, Number(age));
    cats.push(currCat)
}
for(let cat of cats){
    cat.meow();
}

}
solve(['Mellow 2', 'Tom 5',`Jerry 6`])