import deepCopy from "./deepCopy";

test("deepCopy test", () => {
  const map = new Map();
  map.set("test", 12345);
  map.set("test2", { a: 123, b: 456 });
  map.set("test3", [1, 2, 3, 4, 5]);

  const set = new Set();
  set.add(12345);
  set.add({ a: 123, b: 456 });
  set.add([1, 2, 3, 4, 5]);

  const target = {
    number: 12345,
    string: "abcde",
    boolean: false,
    null: null,
    undefined: undefined,
    symbol: Symbol("symbol"),
    object: { a: 123, b: 456 },
    date: new Date(),
    map,
    set,
  };

  expect(deepCopy(target)).toEqual(target);
});