//1번
const greet = (name) => `안녕하세요, ${name}님!`;

console.log(greet('윤준식'));

//2번
const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(5, 5));

//3번
const getCurrentTime = () => new Date();
console.log(getCurrentTime());

//4번
const calculateArea = (width, height) => {
  const area = width * height;
  return `면적은 ${area}입니다.`;
};

console.log(calculateArea(10, 5));

//5번
const createUser = (name, age) => {
  return { name: name, age: age };
};

console.log(createUser('윤준식', 26));

//6번
const checkAge = (age) => {
  if (age >= 18) {
    return '성인입니다.';
  } else {
    return '미성년자입니다.';
  }
};

console.log(checkAge(20));

//7번
const sumArray = (numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(sumArray([1, 2, 3, 4, 5]));

//8번
const capitalizeString = (str) => str.toUpperCase();
console.log(capitalizeString('hello'));

// 9번
setTimeout(() => console.log('3초가 지났습니다!'), 3000);

// 10번
const processArray = (arr) =>
  arr.filter((num) => num > 0).map((num) => num * 2);

console.log(processArray([-2, -1, 0, 1, 2, 3]));
