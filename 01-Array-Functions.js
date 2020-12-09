//Retornar lista de usuarios activos
let activeUsers = [];
for (let i = 0; i < users.length; i++) {
  let u = users[i];
  if (u.isActive) {
    activeUsers.push[u];
  }
}

//Obtener lista de usuario por ID
for (let i = 0; i < users.length; i++) {
  if (users[i].id === id) {
    user = users[i];
  }
}

users.find(u => u.id === id);

//Checking Elements in an Array
let approved = true;
for (let i = 0; i < p.length; i++) {
  if (!p[i].approved) {
    approved = false;
  }
}

products.every(p => p.approved);

let approved = false;
for (let i = 0; i < p.length; i++) {
  if (p[i].approved) {
    approved = true;
  }
}

products.some(p => p.approved);

let onSale = [];
for (let i = 0; i < p.length; i++) {
  if (p[i].onSale) {
    onSale.push(p[i]);
  }
}

products.filter(p => {
  return p.onSale;
});

for (let i = 0; i < nums.length; i++) {
  sum += numbers[i];
}

nums.reduce((accumulator, n) => accumulator + n, 0);
