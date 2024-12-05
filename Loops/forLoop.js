// For Loop :
    // A for loop declares looping instructions, with three important pieces of information separated by semicolons ;:
for (let i = 0; i < 4; i += 1) {
  console.log(i);
};


// Nested For Loop :
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}



// Reverse Loop :
const items = ['apricot', 'banana', 'cherry'];

for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}

