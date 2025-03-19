//1번 문제
const simple = new Promise((resolve) => {
  setTimeout(() => resolve('완료!'), 2000);
});

simple.then(console.log);

//2번 문제
function check(num) {
  return new Promise((resolve, reject) => {
    if (num >= 0) {
      resolve(`${num}은 양수입니다.`);
    } else {
      reject(`${num}은 음수입니다.`);
    }
  });
}

check(5).then(console.log).catch(console.error);

//3번 문제
function many(num) {
  return Promise.resolve(num);
}

many(5)
  .then((num) => num * 2)
  .then((num) => num + 10)
  .then((result) => console.log(`최종 결과 : ${result}`));
