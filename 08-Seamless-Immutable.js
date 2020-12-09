const myObj = {};
myObj.firstName = "Nate";
delete myObj.firstName;

const myOtherObj = {};
myObj = myOtherObj;

let myArray = [3, 5, 1, 2, 4];
myArray.sort(); //?

let myImmutable = Immutable([3, 5, 1, 2, 4]);
myImmutable.sort();

const diff = (a, b) => {
  return a - b;
};
R.sort(diff, myImmutable);

myImmutable.asMutable().push(10);
console.log(myImmutable);



const immutableObj = Immutable({firstName: 'Nate'});
immutableObj.lastName = 'Taylor';
console.log(immutableObj);