import subStringIsNotValid from './notcontainvalidator.js';

console.log( "Testing Condition 1 Passed = " + !subStringIsNotValid(   "Hallo world" , "world" , true  ) );
console.log( "Testing Condition 2 Passed = " + !subStringIsNotValid(   "Hallo world" , "World" , false ) );
console.log( "Testing Condition 3 Passed = " + subStringIsNotValid(    "Hallo world" , "World" , true  ) );
console.log( "Testing Condition 4 Passed = " + subStringIsNotValid(    "Hallo world" , "beans"         ) );
console.log( "Testing Condition 5 Passed = " + !subStringIsNotValid(   "Hallo world" , "world"         ) );