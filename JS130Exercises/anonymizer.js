let Account = (function() {
  let usersData = {};

  function anonymize() {
    let letterArr = [...'qwertyuiopasdfghjklzxcvbnm'];
    let charSequence = '';
    while (charSequence.length < 16) {
      let letterOrNum = Math.floor(Math.random() * 2);
      let rndmNum = Math.floor(Math.random() * 10);
      let rndmLetter = Math.floor(Math.random() * 26);
      if (letterOrNum === 0) {
        charSequence += rndmNum;
      } else {
        charSequence += letterArr[rndmLetter];
      }
    }
    return charSequence;
  }

  function validatePassWord(password, user) {
    return usersData[user].password === password;
  }
  
  return {
    init(email, password, firstName, lastName) {
      this.displayName = anonymize();
      usersData[this.displayName] = {
        email,
        password,
        firstName,
        lastName,
      };
      return this;
    },

    reanonymize(crrntPass) {
      if (validatePassWord(crrntPass, this.displayName)) {
        let userData = usersData[this.displayName];
        let oldDispName = this.displayName;
        this.displayName = anonymize();
        delete usersData[oldDispName];
        usersData[this.displayName] = userData;
        return true;
      } else {
        return 'Invalid Password';
      }
    },
  
    resetPassword(crrntPass, newPass) {
      if (validatePassWord(crrntPass, this.displayName)) {
        usersData[this.displayName].password = newPass;
        return true;
      } else {
        return 'Invalid Password';
      }
    },
  
    firstName(crrntPass) {
      if (validatePassWord(crrntPass, this.displayName)) {
        return usersData[this.displayName].firstName;
      } else {
        return 'Invalid Password';
      }
    },
  
    lastName(crrntPass) {
      if (validatePassWord(crrntPass, this.displayName)) {
        return usersData[this.displayName].lastName;
      } else {
        return 'Invalid Password';
      }
    },
  
    email(crrntPass) {
      if (validatePassWord(crrntPass, this.displayName)) {
        return usersData[this.displayName].email;
      } else {
        return 'Invalid Password';
      }
    },
  
    displayNames() {
      return this.displayName;
    }
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '0987', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'
console.log(bazQux.email('0987'));
console.log(bazQux.firstName('abc'));
// console.log(fooBar.email('123456'));  
// fooBar.x();
// fooBar.reanonymize('123456');
// fooBar.x();