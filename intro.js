
// let name = "Asad"; 
// let Asad = "10"; 
// let age = 28; 


// let isActive = true; 

// let ad = Asad + age;  


// console.log(ad);


function avg(num1, num2){

    let average = (num1 + num2)/2; 

    return average; 
}

// let age1 = 10; 
// let ag2 = 20; 

// let average = avg(age1, age2); 


// console.log(average);

// console.log(avg(5, 10));



let student = {

    name : 'Asad',  
    age: 28, 
    average: avg, 

}; 


let myName = 'Salman'; 

myName = myName.toLowerCase(); 

console.log(myName);

student.age = 35; 
console.log(student.age);

console.log(student.average(10, 5));


let marks = [90, 90, 50, 90, 90, 50, 90, 90, 50, 90, 90, 50]; 

let addMarks = 0; 
for (i=0; i< marks.length; i++ ){

    marks[i] = marks[i] + 10; 
    console.log(marks[i]);
}

console.log("Final Output", marks);

console.log(marks[2]);


for (i=0; i<=10; i++ ){
     
    console.log("Hello Uncle");
}