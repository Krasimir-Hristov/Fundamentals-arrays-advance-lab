function solve(arr){

    let kNum = arr.shift();

let firstK = arr.slice(0,kNum,);
let lastK = arr.slice(-kNum)
console.log(firstK.join(` `))

console.log(lastK.join(` `))

}
solve([2, 7, 8, 9])
solve([3, 6, 7, 8, 9])