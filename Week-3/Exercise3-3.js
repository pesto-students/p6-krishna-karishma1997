/*Function declaration*/
function createIncrement() {
    let count = 0;
    function increment() {
        count++;
        console.log(count);
    }
    //used let keyword - it is block scoped so incremented count can be accessible here that is outside the scope
    let message = `Count is${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log]; // after return function will stops the execution so line 16-18 will not work
}
const [increment, log] = createIncrement(); //createIncrement function will execute 
increment();
increment();
log();// What is logged?
