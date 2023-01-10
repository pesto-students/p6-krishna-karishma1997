let n1=0, n2=1, number = [1,2,3,4,5,6,7], temp;
console.log("Fibonnaci series");
for (let n in number){
    console.log(n1);
    temp=n1+n2;
    n1=n2;
    n2=temp;
    n--;
}