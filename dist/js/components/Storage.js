import { Storage } from "./components/Storage.js";
const todoStorage = new Storage("todo");

// todoStorage.write({ a: 1, b: 2 });

let a = todoStorage.read();
console.log(a);
