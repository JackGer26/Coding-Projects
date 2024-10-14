/*

Solution One

let admin;

let name = 'John'

admin = name;

alert (admin);

*/

/*

Solution 2

let ourPlanetName

let currentUserName

*/

/*

Solution 3

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did you get your parents permission?')
    }
}
*/

/*

Solution 4

function minNumber (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
*/

/*Solution 5*/

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }
