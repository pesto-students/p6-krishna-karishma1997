const threeSum = (arr, target) => {
    let closestSum = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(target - closestSum) >
                    Math.abs(target - (arr[i] + arr[j] + arr[k])))
                    closestSum = (arr[i] + arr[j] + arr[k]);
            }
        }
    }
    return closestSum;
}
let arr = [-1, 2, 1, -4];
let target = 1;
const result = threeSum(arr, target);
console.log(result);

//Time complexity O(n*n*n)
