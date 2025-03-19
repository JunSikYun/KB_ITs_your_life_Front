//math.js
/*
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export { add, subtract };

export const add = (a, b) => a + b;
const subtract = (a, b) => a - b;*/

// export는 {}로 받아야하고 (many)
// export default는 {} 없이 사용 (only one)
export default function (a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

//배열 내보내기
export const fruits = ['바나나', '사과', '딸기', '오렌지'];
