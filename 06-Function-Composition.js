const diff = difference(1, 2);

const val = abs(diff);

abs(difference(1, 2));

//Naming a composed function
const absoluteDifference = (first, second) => abs(difference(first, second));

//Multiples funciones

const isEmptyString = str => {
  const value = R.defaultTo("", str);
  const trimmedValue = R.trim(value);
  return R.isEmpty(trimmedValue);
};

const isEmptyString = R.pipe(R.defaultTo(""), R.trim, R.isEmpty);
isEmptyString("abc");

// 5 |> double |> double |> increment |> double; // 42
