function solve(arr){
    
    let arrOfNums = arr.map(Number);
    let output = [];
 
    for( let num of arrOfNums){
        if(num < 0){
            output.unshift(num);
        }else{
            output.push(num);
        }
    }


    console.log(output.join(`\n`) )
}
//solve(['7', '-2', '8', '9']);
solve(['3', '-2', '0', '-1']);