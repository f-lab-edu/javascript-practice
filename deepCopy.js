function deepCopy(target) {
  // 원시 타입, Date 타입인 경우
  if (!(target instanceof Object) || target instanceof Date) {
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

  // 참조 타입인 경우
  let result = Array.isArray(target) ? [] : {};
  const keys = Object.keys(target);
  for (let key of keys) {
    result[key] = deepCopy(target[key]);
  }

  return result;
}

export default deepCopy;