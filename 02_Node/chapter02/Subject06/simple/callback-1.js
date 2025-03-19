const order = (drink, callback) => {
  console.log(`${drink} 주문 접수`);
  setTimeout(() => {
    callback(drink);
  }, 3000);
};

const display = (result) => {
  console.log(`${result} 완료!`);
};

order('아메리카노', display);
