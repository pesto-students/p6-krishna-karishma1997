const subArray = (a, size) => {
    var max = 0, min = 0, start = 0, end = 0, s = 0;
    for (i = 0; i < size; i++) {
        min =min + a[i];
        // console.log(max, "max.......");
        if (max < min) {
            max = min;
            start = s;
            end = i;
        }
        if (min < 0) {
            // console.log(min,"min");
            min = 0;
            s = i + 1;
        }
    }
    return max
}
let A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let arrLength = A.length;
const result = subArray(A, arrLength);
console.log(result);


//Time complexity O(n)

