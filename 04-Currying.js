//Currying
// Convert a function that accepts multiple parameters into
// a series of functions that each only take 1 parameter

const byId = id => {
  return item => {
    return item.id === id;
  };
};

byId(2)(item);

//Partial Application
const deactivateUser = id => {
  const currentUser = byId(id);
  users.find(currentUser).active = false;
};

//Ramda’s curry function

const byId = R.curry((id, item) => item.id === id);

users.find(byId(2));

//Curry a Function with Multiple Arguments
const add = R.curry((a, b, c) => {
  return a + b + c;
  });
  add(1)(2)(3);