import { compose, pipe } from "lodash/fp";

let input = " JavaScript  ";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = compose(wrapInDiv, toLowerCase, trim); //this removes the wraping of function in other fns. order from right to left
transform(input);
const transform2 = pipe(trim, toLowerCase, wrapInDiv); //order from left to right
transform2(input);
