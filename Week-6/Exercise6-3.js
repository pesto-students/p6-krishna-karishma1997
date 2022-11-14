function sortArray(a, arrLength) {
    let first = 0;
    let last = arrLength - 1;
    let mid = 0;
    let temp = 0;
    while (mid <= last) {
        if (a[mid] == 0) {
            temp = a[first];
            a[first] = a[mid];
            a[mid] = temp;
            first++;
            mid++;
        }
        else if (a[mid] == 1) {
            mid++;
        }
        else {
            temp = a[mid];
            a[mid] = a[last];
            a[last] = temp;
            last--;
        }
    }
}

function NewArray(arr, arrLength) {
let i;
for (i = 0; i < arrLength; i++) {
console.log(arr[i]);
}
}
let arr = [0, 2, 1, 2, 0];
let arrLength = arr.length;
sortArray(arr, arrLength);
NewArray(arr, arrLength);
