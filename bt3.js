let count = 0;
let number = 2;

while (count < 20) {
  //count sẽ đếm từ 0 đến 19 là 20 lần
  let isPrime = true;
  //lặp qua để kt xem có phải số nguyên tố k
  for (let i = 2; i <= Math.sqrt(number); i++) {
    //Kiểm tra xem n có chia hết cho i k
    if (number % i === 0) {
      isPrime = false; // gán lại
      break;
    }
  }
  if (isPrime == true) {
    console.log(number);
    count++;
  }
  number++;
}
