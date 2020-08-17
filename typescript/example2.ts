function f1(){
    let AR:string[] = ['HTML', 'CSS', 'JavaScript', 'Typescript'];
    for(var i =0 ; i<AR.length; i++){
        console.log(AR[i]);
    }

    for (var x in AR){
        // print the array index
        console.log(x)
    }
    for (var x of AR){
        // print the array value
        console.log(x)
    }
}