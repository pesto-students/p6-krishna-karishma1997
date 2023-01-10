const NextGreaterElement = (arr,arrLength)=>{
    var nextElement;
    for(let i=0;i<arrLength;i++){
        nextElement=-1;
        for(let j=i+1;j<arrLength;j++){
            if(arr[i]<arr[j]){
                nextElement=arr[j];
                break;
            }
        }
        console.log(nextElement);
    }
}
const arr=[6,8,0,1,3];
arrLength=arr.length;
NextGreaterElement(arr,arrLength);