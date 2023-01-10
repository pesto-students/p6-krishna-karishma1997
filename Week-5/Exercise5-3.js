function hasDuplicates() {
    let array = [1, 2, 3, 4, 5, 6, 6, 6, 5];
    const setSize = new Set(array).size;
    if (setSize != array.length) {
        let uniqueElement = array.some((element, index) => {
            console.log(array.indexOf(element), element, index);
            return array.indexOf(element) !== index
        });
        if (uniqueElement) {
            console.log(true);
        }
    }
    else {
        console.log(false);
    }
}
hasDuplicates();
