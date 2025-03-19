function displayA() {
  console.log('A');
}

function displayB(callbakc) {
  setTimeout(() => {
    console.log('B');
    callbakc();
  }, 2000);
}

function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);
