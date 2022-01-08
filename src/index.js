import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

/* UI subscribes to store to get notified when the state changes and re-render*/
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

//call the store and dispatch actions ->adding a bug
store.dispatch(bugAdded("Bug1"));
store.dispatch(bugResolved(1)); //resolving the bug

console.log(store.getState());
