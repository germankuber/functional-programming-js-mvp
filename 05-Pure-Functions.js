//Pure functions
//No depende de ninguna otra data que no reciba
//No modifica nada que no sea su retorno

const firstValue = 2;
const add = y => firstValue + y;

const result = add(2); //?

let users = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];
users.push({ id: 3 }); //?
users.push({ id: 3 }); //?

const addElement = array => elementToAdd => [...array, elementToAdd];

let ids = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

addElement(ids)({ id: 9 }); //?

ids //?