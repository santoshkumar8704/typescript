// console.log("this is a tc tutorial");
// interface  someValue {
//     id : number;
//     name : string;
// }
// let someObj : someValue = {
//     id : 123,
//     name : "ramya"
// }
// console.log(someObj)
// function hasName(name:string):boolean{
//     if (arr.includes(name)){
//         console.log('yeah')
//         return true
//     }
//     else{
//         console.log('nah,nah')
//         return false
//     }
    
// }

// let arr:string[] = ['santosh','ramya','ramuu'];
// hasName('ramya')
function newFunc(value : string|number,config:{reverse:boolean}={reverse :false}){
    if (typeof(value) === 'string'){
        return config.reverse ? value.toUpperCase().split('').reverse().join('') : value.toUpperCase()
    }
    else{
        return value*2
    }

}
console.log(newFunc(10))
console.log(newFunc('hello'))
console.log(newFunc('hello',{reverse:true}))