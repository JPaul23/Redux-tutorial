import store from "./store";

//call the store and dispatch actions ->adding a bug
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

//->adding a bug
store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
