var firstName = prompt('First Name');
var lastName = prompt('Last Name');
var name = hello_name(firstName, lastName);
function hello_name(firstName, lastName) {
  if (firstName === 'Shippop') console.log('Best Online Shipping Platform');
  else console.log('Hello Shippop, My name is ' + firstName + ' ' + lastName);
}
