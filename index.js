// toán tử ++ và -- về bản chất đều được sử dụng để tăng giảm giá trị cho trước nhưng cách sử dụng khác nhau

// let number = 10;
//tiền tố
// b1: thực hiện việc cộng hoặc trừ giá trị của biến number  => number= 9
//b2: trả về kết quả vừa thực hiện của biến number => number= 9
// let output = ++number;
// console.log("output: ", output);

//hậu tố
//b1: tạo ra 1 biến copy từ giá trị trước đó: numbercopy = 10
//b2: thực hiện tính toán number: number +1 => number=11
//b3 trả về kết quả từ biến copy
// let output = number++;
// console.log("output: ",output);

//bài toán thực hiện phép tính sau\
// let output = number++ - --number;

// vòng lặp for
// Cú pháp: for(giá trị khởi tạo; điều kiện chạy hoặc dừng; tăng hoặc giảm){}
//for(initialValue; condition; increase/decrease){}

//console log ra từ 1 đến 10
// for (let i = 1; i <= 10; i++) {
//   console.log("lần lặp thứ: ", i);
// }

//NGuyên lý hoạt động
//b1 : khi vòng lặp for chạy,lần dầu tiên lấy giá trị khởi tạo ( let i=1) để thực hiện khối lệnh bên trong
//b2: Nếu điều kiện thỏa mãn 1 <= 1000 thì nhận giá trị bằng true
//b3 Lọt trong khối lệnh xử lý logic
//b4 sau khi xử lý logic thì nó sẽ quay lại for để tăng giá trị(i++) lên 1 đơn vị và nó sẽ quay lại kiểm tra điều kiện(2 <=1000)
//b5 nếu điều kiện k thỏa mãn(false) thì vòng lặp kết thúc
//=> vòng lặp for sử dụng khi biết trước số lần lặp.

//lặp qua các số từ 1 đến 1000, in ra các số chẵn là số lẻ
// for(let i=1;i <=1000; i++){
//     if(i%2===0){
//         console.log("là số chẵn",i);
//     }else{
//         console.log("là số lẻ",i);
//     }
// giảm dãy số từ 10 về 1
// for(let i= 10 ;i>=1;i--){
// console.log(i);
// }

//vòng lặp while: không xác định được só lần lặp

//cú pháp:
// while(condition){
//     increase/decrease;
//     logic
// }
// let i=0;

// while(i<10){
//     i++
//     console.log(i);

//  lấy lựa chọn từ phía client
// nếu như chọn 1 thì in ra thông báo Nhâp tên sản phẩm
// nếu như chọn 2 thì in ra thông báo in tên sản phẩm
// nếu như chọn 3 thì in ra thông báo xuất hóa đơn
//nếu như chọn giá trị khác thì thông báo Nhập sai lựa chọn

//b1: dùng hàm prompt để lấy lựa chọn
//b2 thiết lặp vòng lặp while với số lần lặp hợp lý
//b3 sử dụng switch key để bắt lựa chọn
// let number = 0;
// while (number !== 4) {
//   number = +prompt("mời bạn nhập số");

//   switch (number) {
//     case 1:
//       console.log("Nhập tên sản phẩm");
//       break;
//     case 2:
//       console.log("in tên sản phẩm");
//       break;

//     case 3:
//       console.log("Xuất hóa đơn");
//       break;
//     case 4:
//       console.log("Thoát chương trình");
//       break;
//     default:
//       console.log("Nhập sai lựa chọn");
//       break;
//   }
// }

//vòng lặp do- while: nó sẽ chạy ít nhất 1 lần vào trong "do" rồi sau đó mới kiểm tra điều kiện

// let number = 1;
// do { number ++;
//     console.log(number);

// } while (number< 10);

// for (let index = 0; index < 10; index++) {
//     if(index > 5){
//         break;
//     }
//     console.log(index);

// }

// for (let index = 0; index < 10; index++) {
//     if(index === 5){
//         continue  ;
//     }
//     console.log(index);
// }

// for(let i= 0; i<10; i++){
//     for(let j=0;j<10;j++){
//         console.log("i= ",i + "j= ", j);
//     }
// }

// for(let i= 0; i<10; i++){
//     for(let j=0;j<=10;j++){
//         console.log(i + "x"+ j + "=" +i*j);
//     }
// }
// let age =27
// let myName ="NDHung";

// // template String: Cú pháp ``
// console.log(`Tôi tên là: ${myName}, tôi ${ age} tuổi `);

//bt1

