
//bt

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "x" + j + "=" + i * j);
//     if (i === 3 && j === 1) break;
//   }
// }


//bt  


// let N = parseInt(prompt("mời bạn nhập vào số N(2<=N<=100): "));

// if (N < 2 || N > 100) {
//   console.log("mời bạn nhập lại");
// } else {
//   for (let i = 2; i <= N; i++) {
//     let square = Math.pow(i, 2);
//     if (square % 2 === 0) {
//       console.log("square",square);
//     }
//   }
// }


// bt

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log( "FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log( "Fizz");
//   } else if (i % 5 === 0) {
//     console.log( "Buzz");
//   } else {
//     console.log(i);
//   }
// }

//bt


// let N = parseInt(prompt("mời bạn nhập số N: "));
// let isPrime = true;

// for (let i = 2; i <= Math.sqrt(N); i++) {
//   if (N % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if(isPrime) {
//   console.log("so nguyen to");
// }else{
//   console.log("khong phai so nguyen to");
// }


//b3

// let random = Math.floor(Math.random() * 10);
// console.log(random);

// for (let i = 1; i <= random; i++) {
//   console.log(console.log(`\x1b[3${i}m%s\x1b[0m`, "Chữ màu"));
// }


//bt tam giác

for(let i= 1;i <=10;i++){
  let row = "";
  for(let j=1; j<=i; j++){
    row= row + "*";
  }
  console.log(row);
}

