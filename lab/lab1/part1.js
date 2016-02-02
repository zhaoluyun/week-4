var age, over9000, valueAtKey;
var lab1 = (function() {
  var part1 = {
    func: function() { return age; },
    instructions: "Write a function, age, that takes a birth year and returns an age in years.",
    example: "age(2000) should return 16",
    run: function() {
      return function() {
        return age(1971) === 45;
      };
    }
  };
  var part2 = {
    func: function() { return over9000; },
    instructions: "Write a function, over9000, that returns true for numbers over 9000 and false otherwise",
    example: "over9000(22) should return false",
    run: function() {
      return function() {
        return over9000(9001) === true && over9000(12) === false;
      };
    }
  };
  var part3 = {
    func: function() { return valueAtKey; },
    instructions: "Write a function, valueAtKey, that returns the value of an object at a specified key",
    example: "valueAtKey({'name': 'Nathan'}, 'name') should return 'Nathan'",
    run: function() {
      return function() {
        return valueAtKey({'foo': 'bar'}, 'foo') === 'bar';
      };
    }
  };
  var part4 = {
    func: function() { return ; },
    instructions: "Write a function, y, which returns the y coordinate of a line given m, x, and b",
    example: "y(0, 0, 0) should return 0; y(1, 1, 1) should return 2",
    run: function() {
      return function() {
        return y(12, 1, 12) === 24;
      };
    }
  };
  var part5 = {
    func: function() { return ; },
    instructions: "",
    example: "",
    run: function() {
      return function() {
      };
    }
  };
  var part6 = {
    func: function() { return ; },
    instructions: "",
    example: "",
    run: function() {
      return function() {
      };
    }
  };
  var part7 = {
    func: function() { return ; },
    instructions: "",
    example: "",
    run: function() {
      return function() {
      };
    }
  };
  var part8 = {
    func: function() { return ; },
    instructions: "",
    example: "",
    run: function() {
      return function() {
      };
    }
  };
  var part9 = {
    func: function() { return ; },
    instructions: "",
    example: "",
    run: function() {
      return function() {
      };
    }
  };
  var steps = [part1, part2, part3, part4, part5, part6, part7, part8, part9];
  var currentStep = 0;

  var instructions = function() {
    console.log(steps[currentStep].instructions);
  };
  var nextStep = function() {
    currentStep = currentStep + 1;
    lab1methods.run = steps[currentStep].run;
    console.log(steps[currentStep].instructions);
  };

  var lab1methods = {
    instructions: instructions,
    run: function() {
      if (!_.isFunction(steps[currentStep].func())) {
        console.log("Try again, it looks like you didn't correctly name your function");
      } else if (steps[currentStep].run()()) {
        if (currentStep === 8) {
          console.log("Great work. You've completed all tests. Perhaps see if you can help a neighbor");
        } else {
          console.log("Good job, your function works. On to step ", currentStep + 2);
          nextStep();
        }
      } else {
        console.log("Something's wrong, try again.");
      }
    }
  };
  return lab1methods;
})();

var instructions = lab1.instructions;
var run = lab1.run;
