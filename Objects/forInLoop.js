let mobile = {
  brand: 'Samsung',
  model: 'Galaxy Note 9',
  design: 'New',
  price: '98K'
};

for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}




// Use hasOwnProperty for Safety: To ensure that you’re only iterating over the object's own properties and not any inherited properties, you can use the hasOwnProperty method inside the loop:
for (let key in mobile) {
  if (mobile.hasOwnProperty(key)) {
    console.log(`${key}: ${mobile[key]}`);
  }
}