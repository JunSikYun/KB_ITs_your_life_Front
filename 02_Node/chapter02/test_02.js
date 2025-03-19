//1번 문제
// function user(name, callback) {
//   const message = `안녕하세요, ${name}님!`;
//   callback(message);
// }

// function message(msg) {
//   console.log(msg);
// }

// user('윤준식', message);

// //2번 문제
// function math(a, b, callback) {
//   const sum = `두 숫자의 합 = ${a + b}`;
//   callback(sum);
// }

// function result(rs) {
//   console.log(rs);
// }

// math(5, 10, result);

// //3번 문제
// function pass(grade, callback) {
//   let tmp;
//   if (grade < 60) {
//     tmp = '불합격';
//   } else if (grade >= 60) {
//     tmp = '합격';
//   }
//   callback(tmp);
// }

// function text(chk) {
//   console.log(chk);
// }

// pass(30, text);

//4번 문제
// function listUp(list, callback) {
//   list.sort();
//   callback(list);
// }

// function printList(li) {
//   for (let i = 0; i < li.length; i++) {
//     console.log(`${i + 1} : ${li[i]} `);
//   }
// }

// let array = ['바나나', '사과', '딸기', '배'];
// listUp(array, printList);

//5번 문제
// function vipCheck(pay, callback) {
//   let tmp;
//   if (pay >= 50000) {
//     tmp = '우수회원';
//   } else {
//     tmp = '일반회원';
//   }
//   callback(tmp);
// }

// function check(chk) {
//   console.log(chk);
// }

// vipCheck(61000, check);
