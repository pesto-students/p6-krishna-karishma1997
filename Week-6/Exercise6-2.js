function spiralOrder(m, n, arr) { //m->row n->column
    let i, k = 0, l = 0;
    //k->row l->column
    while (k < m && l < n) {
        for (i = l; i < n; ++i) {
            console.log(arr[k][i]);
        }
        k++;
        for (i = k; i < m; ++i) {
            console.log(arr[i][n - 1]);
        }
        n--;
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                console.log(arr[m - 1][i]);
            }
            m--;
        }
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                console.log(arr[i][l]);
            }
            l++;
        }
    }
}
let arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
let row = arr.length;
let column = arr[0].length;
spiralOrder(row, column, arr);


