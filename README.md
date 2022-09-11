# Not Contain Validator
This module is small but easy to use. The purpose of this module is to check if a string does not contains a sub string, it can optionally also do none case sensitive comparing.
## Validation processes
The code contains two methods to check it a string contains a invalid substring.
### Compare method 1
This method is case sensitive so both string value and sub string value must be the same case.
### Compare method 2
This method is not case sensitive so both string value and sub string value can be any case.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import { subStringIsValid } from '@teamcoder/notcontainvalidator';

console.log( "Testing Condition 1 Passed = " + !subStringIsNotValid(   "Hallo world" , "world" , true  ) );
console.log( "Testing Condition 2 Passed = " + !subStringIsNotValid(   "Hallo world" , "World" , false ) );
console.log( "Testing Condition 3 Passed = " + subStringIsNotValid(    "Hallo world" , "World" , true  ) );
console.log( "Testing Condition 4 Passed = " + subStringIsNotValid(    "Hallo world" , "beans"         ) );
console.log( "Testing Condition 5 Passed = " + !subStringIsNotValid(   "Hallo world" , "world"         ) );
```
The results will look as follows
```
Testing Condition 1 Passed = true
Testing Condition 2 Passed = true
Testing Condition 3 Passed = true
Testing Condition 4 Passed = true
Testing Condition 5 Passed = true
```
## Function Parameters
### Parameters Passed
```
@param  { String  }  source        The source string to be checked
@param  { String  }  subString     The sub string to be checked
@param  { Boolean }  caseSensitive If the check must be case sensitive ( optional , default = true )
```
### Parameters Returned
```
@return { Boolean }                Validation passed or failed
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \notcontainvalidator\notcontainvalidator.js:1
import { subStringIsNotValid } from '@teamcoder/notcontainvalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 07 September 2022      | Official first release                                                                                |
| 1.0.1    | 07 September 2022      | Correcting documentation                                                                              |
| 1.0.2    | 09 September 2022      | Fixed package.json so that npm can install on any os                                                  |
| 1.0.3    | 10 September 2022      | Fixed code to be proper npm package                                                                   |
| 1.0.4    | 11 September 2022      | Removed Default from export function in notcontainvalidator.js file                                   |
| 1.0.5    | 11 September 2022      | Correcting documentation                                                                              |
| 1.0.6    | 11 September 2022      | Correcting documentation                                                                              |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/notcontainvalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
NotContainvalidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)