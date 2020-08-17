function f1() {
    var AR = ['HTML', 'CSS', 'JavaScript', 'Typescript'];
    for (var i = 0; i < AR.length; i++) {
        console.log(AR[i]);
    }
    for (var x in AR) {
        // print the array index
        console.log(x);
    }
    for (var _i = 0, AR_1 = AR; _i < AR_1.length; _i++) {
        var x = AR_1[_i];
        // print the array value
        console.log(x);
    }
}
