'use strict';

function multiBracketValidation(input) {

  var brackets = '[]{}()',
    stack = [],
    i, character, bracePosition;

  for(i=0; character = input[i]; i++){
    bracePosition = brackets.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1);
    } else {
      if(stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;

}

multiBracketValidation('{}');
console.log(multiBracketValidation('{}'));

multiBracketValidation('{}(){}');
console.log(multiBracketValidation('{}(){}'));

multiBracketValidation('()[[Extra Characters]]');
console.log(multiBracketValidation('()[[Extra Characters]]'));

multiBracketValidation('(){}[[]]');
console.log(multiBracketValidation('(){}[[]]'));

multiBracketValidation('{}{Code}[Fellows](())');
console.log(multiBracketValidation('{}{Code}[Fellows](())'));

multiBracketValidation('[({}]');
console.log(multiBracketValidation('[({}]'));

multiBracketValidation('(](');
console.log(multiBracketValidation('(]('));

multiBracketValidation('{(})');
console.log(multiBracketValidation('{(})'));