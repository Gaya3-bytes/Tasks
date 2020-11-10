var a = [1, 2, 4, 5, 4];
//find function
var find = function (m) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] == m) {
            var c = i;
            return c;
        }
    }
};
console.log(find(4));
//sum function
var sum = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};
console.log(sum(a));
//filter function
var filter = function (n) { var d = []; for (var i = 0; i < a.length; i++) {
    if (a[i] > n) {
        d.push(a[i]);
    }
} return d; };
console.log(filter(2));
//reduce function
var reduce = function (arr) {
    var accumulator = 0;
    var currentValue;
    for (var i = 0; i < arr.length; i++) {
        currentValue = arr[i];
        accumulator = accumulator + currentValue;
    }
    return accumulator;
};
console.log(reduce(a));
//lodash chunk function
var chunk = function (arr, n) {
    var x = [];
    var y = [];
    var count = 0;
    for (var i = 0; i < arr.length; i = i++) {
        y.push(arr[i]);
        count++;
        if (n == count) {
            x.push(y);
            y = [];
            count = 0;
        }
    }
    x.push(y);
    return x;
};
console.log(a, 1);
