import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  //returning the new updated object
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book); //returns a new book

console.log(book);
console.log(updated);
