// // function
let preturi = [10, 20, 25, 12, 23, 26, 32];
preturi.push(10);
let preturi1 = [1, 2, 5, 2, 2, 6, 3];
let preturi2 = [10, 20, 30, 40];

let sumaAfizata;
// // let sum = 0;
// // for (let i = 0; i < preturi.length; i++){
// //     sum = sum + preturi [i];
// //     console.log (sum);
// }
function sum(myArr){
    let sum = 0;
    for (let i = 0; i < myArr.length; i++){
        sum = sum + myArr [i];
    }
    // console.log (sum);
    return sum;

}
let suma = sum(preturi);
console.log (suma);
let suma1 = sum(preturi1);
console.log (suma1);
let suma2 = sum(preturi2);
console.log (suma2);


sumaAfizata = document.getElementById ('suma');
sumaAfizata.innerHTML = `<b style = "color: green"> ${suma} </b>`;