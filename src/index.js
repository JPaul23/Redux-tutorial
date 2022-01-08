import store from "./store";
import * as actions from "./actionTypes";

/* UI subscribes to store to get notified when the state changes and re-render*/
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

//call the store and dispatch actions ->adding a bug
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});

//getting unsubsribe
unsubscribe();

//->adding a bug
store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
