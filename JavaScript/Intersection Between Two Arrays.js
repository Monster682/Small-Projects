function performIntersection(arr1, arr2) {
    // Create sets from both arrays and find the intersection using filter
    const setA = new Set(arr1);
    return arr2.filter(item => setA.has(item));
}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);
