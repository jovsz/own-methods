"use strict";

_ = {
  each: function each(array, fn) {
    for (var i = 0; i < array.length; i++) {
      fn(array[i], i, array);
    }
  },
  filter: function filter(array, fn) {
    var filteredData = [];

    for (var i = 0; i < array.length; i++) {
      if (fn(array[i], i, array)) {
        filteredData.push(array[i]);
      }
    }

    return filteredData;
  },
  map: function map(array, fn) {
    var newData = [];

    for (var i = 0; i < array.length; i++) {
      newData.push(fn(array[i]));
    }

    return newData;
  },
  find: function find(array, element) {
    var flag = true;

    for (var i = 0; i < arr.length; i++) {
      if (array[i] === element) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }

    if (flag == true) {
      return 'item found ' + element;
    } else {
      return 'Item not found ' + element;
    }
  },
  findIndex: function findIndex(array, element) {
    var flag = true;

    for (var i = 0; i < array.length; i++) {
      if (array[i] === element) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }

    if (flag == true) {
      return i;
    } else {
      return -1;
    }
  },
  constain: function constain(array, element) {
    var cont = array.indexOf(element);

    if (cont >= 0) {
      return true;
    } else {
      return false;
    }
  },
  pluck: function pluck(array, element) {
    var newData = [];

    for (var i = 0; i < array.length; i++) {
      if (!array[i][element] == '') {
        for (var _i = 0; _i < array.length; _i++) {
          newData.push(array[_i][element]);
        }

        return newData;
      } else {
        return 'La propiedad ' + element + ', no se existe en el arreglo';
      }
    }
  },
  without: function without(array, element) {
    var cont = array.indexOf(element);

    if (cont >= 0 || cont2 >= 0) {
      array.splice(cont, 1);
      return array;
    } else {
      return 'No se pudo eliminar el objeto, no exite en el arreglo';
    }
  }
};
var numbers = [1, 22, 3, 41, 5, 'oscar'];
var string = 'Hello world this is a string';
var objects = [{
  name: 'joel',
  age: 50,
  email: 'joel@gmail.com'
}, {
  name: 'juan',
  age: 20,
  email: 'juan@outlook.com'
}]; // uso each

_.each(numbers, function (number) {
  return console.log(number);
}); // uso filter para obtener números mayores a 20


var biggerThan20 = _.filter(numbers, function (number) {
  return number > 20;
});

console.log(biggerThan20); // uso map para multiplicar cada uno de los elemtos del arreglo *2

var addOne = _.map(numbers, function (number) {
  return number * 2;
});

console.log(addOne); //usando find index

var foundIndex = _.findIndex(numbers, 'oscar');

console.log(foundIndex); //usando find

var found = _.find(numbers, 'david');

console.log(found); //usando contains

var cons = _.constain(string, 'oscar');

var cons2 = _.constain(string, 'ok');

console.log(cons);
console.log(cons2); //usando pluck

var extractInfo = _.pluck(objects, 'email');

console.log(extractInfo); //usando without 

var remove = _.without(numbers, 'oscar');

console.log(remove);