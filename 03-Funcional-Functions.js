//First Class Citizens
$.ajax("users").done(function(data) {});

promise.then(data => {});

it("testcase", () => {});

products.filter(p => p.isActive);

const isActive = item => item.active;
products.filter(isActive);

//Reusing
users.filter(isActive);
metadata.filter(isActive);
locations.filter(isActive);

//Returning Functions

users.find(u => u.id === id);

const byId = item => {
  return item.id === id;
};
users.find(byId);

const byId = (item, id) => item.id === id;

users.find(item => byId(item, 2));

const byId = id => {
  return item => {
    return item.id === id;
  };
};

users.find(byId(2));
