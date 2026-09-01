// Premitive
    // String
        // define - 'this is string', "this is string", `34535`
        const age = 50
        // console.log(`my age is ${age} and I feel young`); // template literal - dynamic string
        // string merge
        const str = 'my age is'
        // console.log(str + ' ' + age + ' and I feel young');
        // console.log(typeof(Number('55') + Boolean(' ')))

        const lengthyStr = '     why so serious?     '
        // console.log(lengthyStr.length);
        // console.log(lengthyStr.charAt(14));
        // console.log(lengthyStr.charCodeAt(14));
        // console.log(lengthyStr.concat(' ', 'testing', ' ', 'working'));
        // console.log(lengthyStr.at(14));
        // console.log(lengthyStr[14]);
        // console.log(lengthyStr.slice(7, 14));
        // console.log(lengthyStr.slice(-5, -1));
        // console.log(lengthyStr.substring(7, 14));
        // console.log(lengthyStr.substring(-5, -1));
        // console.log(lengthyStr.toUpperCase());
        // console.log(lengthyStr.toLowerCase());
        // console.log(lengthyStr.trim());
        // console.log(lengthyStr.trimStart());
        // console.log(lengthyStr.trimEnd());
        // console.log(lengthyStr.padEnd(50, '*'));
        // console.log(lengthyStr.padStart(50, '*'));
        // console.log(lengthyStr.replace('s', '%'));
        // console.log(lengthyStr.replaceAll('s', '%'));
        // console.log(lengthyStr.split('*'));
        
        // search methods
        // console.log(lengthyStr.indexOf('s'));
        // console.log(lengthyStr.lastIndexOf('*'));
        // console.log(lengthyStr.includes('so'));
        // console.log(lengthyStr.startsWith(' '));
        // console.log(lengthyStr.endsWith(' '));
        
    // Number
        // define - 123, 34.5, -234, 0 - -2^53 to 2^53
        // console.log(typeof String(33));
        const numm = 234234.566456
        // console.log(numm.toFixed(1));
        // console.log(numm.toExponential(3));

    // Boolean
        // true, false
        // console.log(Boolean(null))

    // null
        // const fistName = null

    // undefined
        // undefined

    // BigInt
        // 1n

    // Symbol
        // Symbol()


// Non-premitive / Complex
    // Object
        // define - { key: value, key: value }
        // console.log('User', { name: 'John', age: 30 });
        // console.log('Laptop', { screen: '13 inch', ram: '16 gb', ssd: 512 });
        const base = {id: 33443523432, name: 'stella'}
        const objj = Object.assign(base, { name: 'john'}, {age: 30, hobby: ['biking', 'reading']})
        // console.log(objj)
        // console.log(Object.keys(objj))
        // console.log(Object.values(objj))
        // console.log(Object.entries(objj))
        
    // Array
        // define - []
        // console.log('sabji', ['bateta', 'tameta', 'ringan']);
        // console.log('students', [
        //     {name: 'Ved', age: 20},
        //     {name: 'Savan', age: 25},
        //     {name: 'Prashant', age: 23},
        // ]);
        const newArr = [4,6,7,7,5,4,5,[6,3,23,[4,5,[6,8,76,5,4,3,23],4],5,6,8],9,7,5,3]
        const newArr2 = [55,6,7,5,4,5,6,3,23,4,5,6,8,76,500]
        // console.log(newArr2);
        // console.log(newArr.length);
        // console.log(newArr.toString());
        // console.log(newArr.at(4));
        // console.log(newArr[4]);
        // console.log(newArr.join(' * '));
        // console.log(newArr.pop());
        // console.log(newArr.push(55));
        // console.log(newArr.shift());
        // console.log(newArr.unshift(456));
        // console.log(newArr.concat(newArr2));
        // console.log(newArr.flat(3));
        // console.log(newArr2.splice(4, 1, 555));
        // console.log(newArr2.toSpliced(4, 1, 555));
        // console.log(newArr2.slice(5, 9));

        // console.log(newArr2.indexOf(6));
        // console.log(newArr2.lastIndexOf(6));
        // console.log(newArr2.includes(6000));


        // console.log(newArr2.find((ved, index, arr) => {
        //     console.log(ved, index, arr);
        //     return ved > 55
        // }));
        // console.log(newArr2.find((element, index) => element === 4));
        // console.log(newArr2.findIndex((element, index) => element === 4));
        // console.log(newArr2.findLast((element, index) => element === 4));
        // console.log(newArr2.findLastIndex((element, index) => element === 4));

        // const sortedArr = newArr2.sort((a, b) => a < b ? 1 : -1)
        // const sortedArr = newArr2.toSorted((a, b) => a < b ? 1 : -1)
        // const fruits = ["Banana", "Orange", "Apple", "Mango", "Berry"];
        // const cars = [
        //     {type:"Volvo", year:2016},
        //     {type:"Saab", year:2001},
        //     {type:"BMW", year:2010}
        // ];

        // console.log(newArr2.reverse());
        // console.log(newArr2.toReversed());
        // console.log(cars.sort((a, b) => a.year > b.year ? 1 : -1));

        // Iteration methods
        // let arr = []
        // newArr2.forEach((element) => {
        //     arr.push(element * 2)
        // })

        // const newArrrrr = newArr2.map((e, i, a) => e > 50 && e < 100)

        // const filteredArr = newArr2.filter((e, i, a) => e > 50 && e < 100)
        // console.log(newArr2.every((e, i, a) => e > 1));
        // console.log(newArr2.some((e, i, a) => e > 500));

        // const reducedValue = newArr2.reduce((accumulator, currentValue) => {
        //     console.log(accumulator, currentValue)
        //     return accumulator + currentValue
        // })
        

        // console.log(newArr2, reducedValue);

        // console.log(Math.max(3, 5,3, 2,434 ,45645,63 ,23,4243,243,3,64));
        
        
        
    // Function
        // define
        // Arrow syntax
            const anotherDataHandler = () => {
                console.log('testing callback function');
                return 'sfoidsfoisdfsodifsjdfoi'
            }
            // anotherDataHandler()

            const var1 = 'new'

            // normal function
                function dataHandler(var1, var2, var3, var4, var5, var6, var7) {
                    console.log('testing function', var7());
                    
                }
                // dataHandler('test', 100, true, false, ['test'], {key: 'value'})
                // dataHandler('new', 200, true, false, ['test'], {key: 'value'}, anotherDataHandler)
                

            // self invoked function
                // (function () {
                //  console.log('this is self invoked string');
                    
                // })()

            // Callback function
                // dataHandler('new', 200, true, ['test'], {key: 'value'}, () => {})


            // Async function