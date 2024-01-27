import deepCopy from "./deepCopy";

describe('deepCopy test', () => {
  test("number copy", () => {
    expect(1).toBe(1);
  });

  test("string copy", () => {
    expect(deepCopy('abcde')).toBe('abcde');
  });

  test("boolean copy", () => {
    expect(deepCopy(false)).toBe(false);
  });

  test("null copy", () => {
    expect(deepCopy(null)).toBe(null);
  });

  test("undefined copy", () => {
    expect(deepCopy(undefined)).toBe(undefined);
  });

  test("Symbol copy", () => {
    const symbol = Symbol("symbol");
    expect(deepCopy(symbol)).toBe(symbol);
  });

  test("Date copy", () => {
    const date = new Date();
    expect(deepCopy(date)).toStrictEqual(date);
  });

  test("Map copy", () => {
    const map = new Map();
    map.set("test", 12345);
    map.set("test2", { a: 123, b: 456 });
    map.set("test3", [1, 2, 3, 4, 5]);

    const mapCopy = deepCopy(map);
    map.set("test3", [6, 2, 3, 4, 5]);

    expect(map.get("test3")[0]).toBe(6);
    expect(mapCopy.get("test3")[0]).toBe(1);
  });

  test("Set copy", () => {
    const set = new Set();
    set.add(12345);
    set.add({ a: 123, b: 456 });
    set.add([1, 2, 3, 4, 5]);

    const setCopy = deepCopy(set);
    expect(setCopy).not.toBe(set);
    expect(setCopy).toEqual(set);
  });

  test("array copy", () => {
    const array = [1, 2, 3, 4, 5];
    const arrayCopy = deepCopy(array);
    array[0] = 3;

    expect(array[0]).toBe(3);
    expect(arrayCopy[0]).toBe(1);
  });

  test("object copy", () => {
    const obj = {
      a: 1,
      b:2,
      c: 3,
      d: {
        e: 1
      }
    }
    const objCopy = deepCopy(obj);
    obj.d.e = 4;

    expect(obj.d.e).toBe(4);
    expect(objCopy.d.e).toBe(1);
  });
});