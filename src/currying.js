//currying function
function add(a) {
  return function (b) {
    return a + b;
  };
}

// or using arrow function
const add2 = (a) => (b) => a + b;

add(1)(5); //add(1, 5)
