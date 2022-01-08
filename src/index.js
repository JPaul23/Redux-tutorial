import store from "./store";
import { bugAdded, bugRemoved } from "./actions";

/* UI subscribes to store to get notified when the state changes and re-render*/
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

//call the store and dispatch actions ->adding a bug
store.dispatch(bugAdded("Bug1"));

//getting unsubsribe
unsubscribe();

//->adding a bug takes Id
store.dispatch(bugRemoved(1));

console.log(store.getState());
