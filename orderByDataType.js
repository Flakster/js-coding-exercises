// We have an object with several attributes of different types. Write the code so we can get 
// the property names corresponding to primitive types printed at the beginning and then the rest

const property6 = Symbol();

const object1 = {
  property1: [1, 2, 3],
  property2: 5,
  property3: { name: "carlos", age: 30 },
  property4: null,  // primitive type
  property5: 3.7,
  [property6]: [1, 2],  // this is primitive but not enumerable
  property7: "ya fuiste",
  property8: undefined, // primitive type
};

function isPrimitive(property) {
  const primitiveTypes = ["string", "number", "undefined"];
  if (
    object1[property] === null ||
    primitiveTypes.includes(typeof object1[property])
  )
    return true;
  else return false;
}
const primitives = [];
const nonPrimitives = [];
for (let key in object1) {
  isPrimitive(key) ? primitives.push(key) : nonPrimitives.push(key);
}

console.log([...primitives,...nonPrimitives]);
