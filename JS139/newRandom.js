/* eslint-disable max-lines-per-function */
function createBankAccount(initialBalance) {
  let deposits = [];
  let withdrawals = [];
  let balance = initialBalance;
  let transactionId = 0;
  return {
    getTransactionId() {
      transactionId += 1;
      return transactionId;
    },
    getBalance() {
      return balance;
    },
    deposit(amount) {
      balance += amount;
      deposits.push([this.getTransactionId(), amount]);
    },
    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }

      balance -= amount;
      withdrawals.push([this.getTransactionId(), amount]);
    },
    getDeposits() {
      return this.deepCloneHelper(deposits);
    },
    getWithdrawals() {
      return this.deepCloneHelper(withdrawals);
    },
    deepCloneHelper(objToClone) {
      if (typeof objToClone !== 'object') return objToClone;
      if (objToClone instanceof Array) {
        let copy = [];
        objToClone.forEach((item) => {
          copy.push(this.deepCloneHelper(item));
        });
        return copy;
      }
      return null;
    },
  };
}

let acct = createBankAccount(500);
acct.deposit(100);
acct.deposit(200);
console.log(acct.getBalance()); // 800

acct.getDeposits().forEach(deposit => deposit[1] *= 10);
acct.getDeposits().forEach(deposit => console.log(deposit));
// [ 1, 1000 ]
// [ 2, 2000 ]

console.log(acct.getDeposits());