function isOneToOne(s1, s2) {
  // # base check
  if (s1.length !== s2.length) return false;
  if (!s1 || !s2) return true;

  // # main code
  let map = new Map();
  let set = new Set();

  for (let i = 0; i < s1.length; i++) {
    if (!map.get(s1[i])) {
      if (set.has(s2[i])) return false;
      map.set(s1[i], s2[i]);
      set.add(s2[i]);
    } else if (map.get(s1[i]) != s2[i]) {
      return false;
    }
  }

  return true;
}

var args = process.argv.slice(2);
/** TEST CASE */
console.log(isOneToOne(args[0], args[1]));
