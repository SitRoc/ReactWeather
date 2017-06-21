// ES6 - Arrow Functions Tutorial

 var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach( function(name) {
//   console.log( 'forEach', name );
// } );
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach( (name) => console.log(name) );

var returnMe = (name) => name + '!';
console.log(returnMe('Steve'));

// Arrow functions take their parents this function.

var person = {
  name: 'Andrew',
  greet: function () {
    names.forEach(function (name) {
      console.log(this.name + ' says hi to '+name);
    });
  }
};

var secPerson = {
  name: 'Andrew',
  greet: function () {
    names.forEach( (name) => console.log(this.name + ' says hi to '+name) );
  }
};

person.greet();
secPerson.greet();

// Challenge

function add ( a, b ){
  return a+b;
}

var addStatement = ( a, b ) => {
  return a + b;
}

var addExpression = ( a, b ) => a + b;
