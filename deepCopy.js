function deepCopy(target) {
    // 원시 타입, Date 타입인 경우
   if (!(target instanceof Object) || target instanceof Date) {
       return target;
   }

   // 참조 타입인 경우
   let result = Array.isArray(target) ? [] : {};
   const keys = Object.keys(target);
   for (key of keys) {
       result[key] = deepCopy(target[key]);
   }

   return result;
}