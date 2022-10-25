let n1=0, n2=1, number = 6, temp;
console.log("Fibonnaci series");
while(number >=0){
    console.log(n1);
    temp=n1+n2;
    n1=n2;
    n2=temp;
    number--;
}