//async/await function
async function doTask1(some) {
    console.log(await some,"Value from generator");
}
//Generator 
function * doTask2() {
    yield 3;
    yield 5;
    let num1=5,num2=5;
    let sum = num1 + num2;
    return sum;
}
const generatorObject = doTask2();
doTask1(generatorObject.next().value);
doTask1(generatorObject.next().value);

