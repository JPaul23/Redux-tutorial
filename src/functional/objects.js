const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Jose",
  },
};

/* when working with nested object, we use the deep copy to prevent the sharrow copying */
const updated = {
  ...person,
  address: {
    ...person.address,
    city: "New York",
  },
  name: "Bob",
};

console.log(person);
console.log(updated);
