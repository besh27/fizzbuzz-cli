var myArgs = process.argv.slice(2);

const fizzBuzz = (num = 25, multiOne = 3, multiTwo = 5) => {
    const bizzArray = [];
    for(let i = 1; i <= num; i++){
        if(i % multiOne === 0 && i % multiTwo === 0){
            bizzArray.push("FIZZBUZZ!!!!");
        } else if(i % multiOne === 0){
            bizzArray.push("Fizz!");
        } else if (i % multiTwo === 0){
            bizzArray.push("Buzz!");
        } else {
            bizzArray.push(i);
        }
    }
    return bizzArray;
}

console.log(fizzBuzz(myArgs[0], myArgs[1], myArgs[2]));
