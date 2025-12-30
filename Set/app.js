let set = new Set();

//! it stores only unique values (no keys are present in set)

set.add("apple");
set.add("mango");
set.add("apple");

console.log(set);

console.log(set.has("fruit"));
console.log(set.size);
console.log(set.delete("mango"));
console.log(set.clear());
console.log(set);
