function deepCopy<T>(target: T): T {
  // 원시 타입, null인 경우
  if (typeof target !== 'object' || target === null) {
    return target;
  }

  // Date 타입인 경우
  if (target instanceof Date) {
    return new Date(target.getTime()) as T;
  }

  // Map 타입인 경우
  if (target instanceof Map) {
    let mapCopy = new Map();
    const keys = target.keys();
    for (let key of keys) {
      mapCopy.set(key, deepCopy(target.get(key)));
    }

    return mapCopy as T;
  }

  // Set 타입인 경우
  if (target instanceof Set) {
    let setCopy = new Set();
    const keys = target.keys();
    for (let key of keys) {
      setCopy.add(deepCopy(key));
    }

    return setCopy as T;
  }

  // 배열 타입인 경우
  if (Array.isArray(target)) return target.map((t) => deepCopy(t)) as T;

  // 객체 리터럴 타입인 경우
  let objCopy = {} as {[key: string]: any};
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      objCopy[key] = deepCopy(target[key]);
    }
  }

  return objCopy as T;
}

export default deepCopy;