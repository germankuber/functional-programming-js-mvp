let invalidLogins = 0;
const login2 = (user, password) => {
  if (user.password !== saltedPassword(password)) {
    invalidLogins++;
  }
  return user;
};

const login3 = (user, password) => {
  if (user.password !== saltedPassword(password)) {
    user.invalidLogins++;
  }
  return user;
};

const login4 = (user, password) => {
  if (user.password !== saltedPassword(password)) {
    return [null, user.invalidLogins + 1];
  }
  return [user, user.invalidLogins];
};

// $http.get("myApi/users");

const billForMonth = (month, monthlyBalance) => {
  customer.balance += monthlyBalance;
  if (customer.balance > 1000) {
    customer.inactive = true;
  }
};

const billForMonth2 = (customer, month, monthlyBalance) => {
  if (customer.balance > 1000) {
    return {
      ...customer,
      balance: localCustomer.balance + monthlyBalance,
      inactive: true,
    };
  }
  return customer;
};
