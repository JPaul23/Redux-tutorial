import { Map } from "immutable";

let book = Map({ title: "Harry Potter" }); //to get a map object

function publish(book) {
  return book.set("isPublished", true); //brings a new object
}

book = publish(book); //re-assign to book

//console.log(book.get("title"));// to get the property value
console.log(book.toJS()); //to get a js object
