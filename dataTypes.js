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
        
    // Function
        // define
            // normal function
                function dataHandler() {
                    console.log('testing function');
                    
                }
                // dataHandler()
                
            // Arrow syntax
                const anotherDataHandler = () => {
                    console.log('testing function');

                }
                // anotherDataHandler()

            // self invoked function
                // (function () {
                //  console.log('this is self invoked string');
                    
                // })()

            // Callback function


            // Async function