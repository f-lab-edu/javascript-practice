"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deepCopy(target) {
    // 원시 타입, null인 경우
    if (!(target instanceof Object) || target === null) {
        return target;
    }
    // Map 타입인 경우
    if (target instanceof Map) {
        let mapCopy = new Map();
        const keys = target.keys();
        for (let key of keys) {
            mapCopy.set(key, deepCopy(target.get(key)));
        }
        return mapCopy;
    }
    // Set 타입인 경우
    if (target instanceof Set) {
        let setCopy = new Set();
        const keys = target.keys();
        for (let key of keys) {
            setCopy.add(deepCopy(key));
        }
        return setCopy;
    }
    // 배열 타입인 경우
    if (Array.isArray(target)) {
        let arrayCopy = [];
        for (let t of target) {
            arrayCopy.push(deepCopy(t));
        }
        return arrayCopy;
    }
    // 객체 리터럴 타입인 경우
    let objCopy = target;
    const keys = Object.keys(objCopy);
    for (let key of keys) {
        objCopy[key] = deepCopy(objCopy[key]);
    }
    return objCopy;
}
exports.default = deepCopy;
