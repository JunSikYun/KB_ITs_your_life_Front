// 배열 생성(배열 안에는 객체)
const products = [
  { id: 1, name: '노트북', price: 1200000, category: '전자기기' },
  { id: 2, name: '스마트폰', price: 800000, category: '전자기기' },
  { id: 3, name: '커피', price: 5000, category: '음료' },
  { id: 4, name: '키보드', price: 150000, category: '전자기기' },
  { id: 5, name: '마우스', price: 50000, category: '전자기기' },
  { id: 6, name: '콜라', price: 2500, category: '음료' },
];

// 문제 1
const keyboardIndex = products.findIndex(
  (product) => product.name === '키보드'
);
console.log(`키보드 인덱스: ${keyboardIndex}`);

// 문제 2
const expensiveProduct = products.find((product) => product.price >= 100000);
console.log('비싼 상품:', expensiveProduct);

// 문제 3
const electronics = products.filter(
  (product) => product.category === '전자기기'
);
console.log('전자기기:', electronics);

// 문제 4
const discountedProducts = products.map((product) => ({
  ...product,
  price: product.price * 0.8,
}));
console.log('할인품:', discountedProducts);

// 문제 5
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(`총액: ${totalPrice}`);

// 문제 6
products.forEach((product) =>
  console.log(`${product.name}: ${product.price}원`)
);
 
// 문제 7
const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log('정렬:', sortedProducts);

// 문제 8
const newProduct = {
  id: 7,
  name: '이어폰',
  price: 30000,
  category: '전자기기',
};
const updatedProducts = [...products];
updatedProducts.splice(2, 0, newProduct);
console.log('추가 후:', updatedProducts);

// 문제 9
products
  .filter((p) => p.category === '전자기기')
  .map((p) => p.name)
  .forEach((name) => console.log(name));

// 문제 10
const categoryTotals = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + product.price;
  return acc;
}, {});
console.log('카테고리별:', categoryTotals);
