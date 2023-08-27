
const req = await fetch('../elements.json');
const elements = await req.json();

console.log(elements);