
/*Our own version of array map*/
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function (item) {
    return item * 2;
});
const arr3 = myownmap(arr1,function (item) {
    return item * 2;
});
function myownmap(arr, fn) {
    const newArray = [];
    arr.forEach(element => {
        newArray.push(fn(element));
    });
    return newArray;
}
//console.log(arr2);
//console.log(arr3);

/*Our own version of array filter*/
const arr4 = [1, 2, 3,4,5,6,7,8];
const arr5 = arr4.filter(element => element > 3);
const arr6 = myownfilter(arr4,element => element > 3);
function myownfilter(arr, fn) {
    const newArray = [];
    arr.forEach(element => {
        if(fn(element) === true)
        newArray.push(element);
    });
    return newArray;
}
//console.log(arr5);
//console.log('custom');
//console.log(arr6);