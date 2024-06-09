console.log("this is a tc tutorial");
interface  someValue {
    id : number;
    name : string;
}
let someObj : someValue = {
    id : 123,
    name : "ramya"
}
console.log(someObj)
function hasName(name:string):boolean{
    if (arr.includes(name)){
        console.log('yeah')
        return true
    }
    else{
        console.log('nah,nah')
        return false
    }
    
}

let arr:string[] = ['santosh','ramya','ramuu'];
hasName('ramya')
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

type Employee = {id:number;name:string;dept:string}
type Manager = {id:number;name:string;employees:Employee[]}
type Staff = Employee | Manager
function printStaffDetails(staff:Staff){
    if ('employees' in staff){
        console.log(staff.name+" has employees of size "+staff.employees.length)
    }
    else{
        console.log(staff.name+"is a employee of"+staff.dept)
    }
}
const santosh:Employee = {id:7,name:'santosh',dept:'father'}
const ramya:Manager = {id:23,name:'ramya',employees:[santosh]}
printStaffDetails(ramya)