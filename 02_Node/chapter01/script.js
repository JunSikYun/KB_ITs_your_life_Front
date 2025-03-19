function outer(name) {
  //클로저
  return function inner() {
    console.log(name);
  };
}

let f1 = outer('홍길동');
let f2 = outer('심청이');

f1();
f2();
