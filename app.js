// let arr = [20, 30, 35, 40, 50, 75, 100];

// Filter values less than 50

// let newArr = arr.filter((element) => {
//     if(element<50) {
//         return true;
//     }
// })
// console.log (newArr);

// Clean Version

// let newArr = arr.filter(element => element<50);
// console.log (newArr);



//Remove all the 'FAIL' elements from the array

// let grades = ['A+', 'A', 'FAIL', 'B', 'C+', 'FAIL']

// let newGrades = grades.filter(element => element!=='FAIL');
// console.log (newGrades);

//Remove without the Filter method

// let goodGrades = [];

// for(let i=0; i<grades.length; i++){
//     if(grades[i]!=='FAIL'){
//         goodGrades.push(grades[i]);
//     }
// }
// console.log (goodGrades);


// Turn each element in the array from dollars to cents

let dollars = [1, 5, 10, 3, 25];

let cents = dollars.map(element => element*100);
console.log(cents);