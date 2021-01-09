_ = {
    each: (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            fn(array[i], i, array)
        }
    },
    filter: (array, fn) => {
        const filteredData = [];

        for (let i = 0; i < array.length; i++) {
            if (fn(array[i], i, array)) {
                filteredData.push(array[i]);
            }
        }
        return filteredData;
    },
    map: (array, fn) => {
        const newData = [];

        for (let i = 0; i < array.length; i++) {
            newData.push(fn(array[i]));
        }
        return newData;
    },
    find: (array, element) => {
        var flag = true;

        for (var i = 0; i < arr.length; i++) {
            if (array[i] === element) {
                flag = true;
                break
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
    findIndex: (array, element) => {
        var flag = true;

        for (var i = 0; i < array.length; i++) {
            if (array[i] === element) {
                flag = true;
                break
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
    constain: (array, element) => {
        const cont = array.indexOf(element);

        if (cont >= 0) {
            return true;
        } else {
            return false;
        }

    },
    pluck: (array, element) => {
        const newData = [];

        for (let i = 0; i < array.length; i++) {
            if (!array[i][element] == '') {
                for (let i = 0; i < array.length; i++) {
                    newData.push(array[i][element]);
                }
                return newData
            } else {
                return 'La propiedad ' + element + ', no se existe en el arreglo';
            }
        }
    },
    without: (array, element) => {
        const cont = array.indexOf(element);

        if (cont >= 0 || cont2 >= 0) {
            array.splice(cont, 1);
            return array;
        } else {
            return 'No se pudo eliminar el objeto, no exite en el arreglo'
        }

    }
}




const numbers = [1, 22, 3, 41, 5, 'oscar'];
const string = 'Hello world this is a string';
const objects = [{ name: 'joel', age: 50, email: 'joel@gmail.com' }, { name: 'juan', age: 20, email: 'juan@outlook.com' }];

// uso each
_.each(numbers, (number) => console.log(number))

// uso filter para obtener números mayores a 20
const biggerThan20 = _.filter(numbers, (number) => number > 20);
console.log(biggerThan20);

// uso map para multiplicar cada uno de los elemtos del arreglo *2
const addOne = _.map(numbers, (number) => number * 2);
console.log(addOne);

//usando find index
const foundIndex = _.findIndex(numbers, 'oscar');
console.log(foundIndex);

//usando find
const found = _.find(numbers, 'david');
console.log(found);

//usando contains
const cons = _.constain(string, 'oscar');
const cons2 = _.constain(string, 'ok');
console.log(cons);
console.log(cons2);

//usando pluck
const extractInfo = _.pluck(objects, 'email');
console.log(extractInfo);

//usando without 
const remove = _.without(numbers, 'oscar');
console.log(remove)