/** 
 * Testing operations and validation functions
 * with Mocha and Node.js Assert module.
 *
 */
const calculator = require('../calculator.js');
const assert = require('assert');

// Test case(s)
describe('calculator function(s)', function() {
  
    //Test case 1  for square function
  it('should square of 2 is 4.', function() {
      // Mock form and input value
      const input = {
          display: {
              value: '2' // Input value as a string
          }
      };

      // Call the function
      calculator.square(input);

      // Assert the result
      assert.equal(form.display.value, '4', 'Expected squared value is incorrect');
  });

  //Test Case 2 for sqrt function
  it('should sqrt of 2 is 1.4142135623730951.', function() {
    // Mock form and input value
    const form = {
        display: {
            value: '2' // Input value as a string
        }
    };

    // Call sqrt the function
    calculator.sqrt(form);

    // Assert the result
    assert.equal(form.display.value, '1.4142135623730951', 'Expected sqrt value is incorrect.');
});

//Test Case 3 for sin function
it('should sin of 2 is 0.9092974268256817.', function() {
  // Mock form and input value
  const form = {
      display: {
          value: '2' // Input value as a string
      }
  };

  // Call the function
  calculator.sin(form);

  // Assert the result
  assert.equal(form.display.value, '0.9092974268256817', 'Expected sin value is incorrect.');
});

});


	