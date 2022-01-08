import store from "./store";

/* UI subscribes to store to get notified when the state changes and re-render*/
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

//call the store and dispatch actions ->adding a bug
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

//getting unsubsribe
unsubscribe();

//->adding a bug
store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
