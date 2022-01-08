import * as actions from "./actionTypes";

/* using arrow function */
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description, //shorthand syntax since name and value are the same
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id,
  },
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});
