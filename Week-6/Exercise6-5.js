const FindDifference = (A, size, B) => {
    let i = 0;
    let j = 1;
    while (i < size && j < size) {
        if (i != j && A[j] - A[i] == B) {
            return 1;
        }
        else if (A[j] - A[i] < B)
            j++;
        else
            i++;
    }
    return 0;
}
let A = [2, 5, 10, 3, 50, 80];
let B = 78;
let size = A.length;
const result = FindDifference(A, size, B);
console.log(result);

//Time complexity O(n x n)


