// Premitive
    // String
        // define - 'this is string', "this is string", `34535`
    // Number
        // define - 123, 34.5, -234, 0 - -2^53 to 2^53
    // Boolean
        // true, false
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
        console.log('User', { name: 'John', age: 30 });
        console.log('Laptop', { screen: '13 inch', ram: '16 gb', ssd: 512 });
        
    // Array
        // define - []
        console.log('sabji', ['bateta', 'tameta', 'ringan']);
        console.log('students', [
            {name: 'Ved', age: 20},
            {name: 'Savan', age: 25},
            {name: 'Prashant', age: 23},
        ]);
        
    // Function
        // define
            // normal function
                function dataHandler() {
                    console.log('testing function');
                    
                }
                dataHandler()
                
            // Arrow syntax
                const anotherDataHandler = () => {
                    console.log('testing function');

                }
                anotherDataHandler()

            // self invoked function
                (function () {
                 console.log('this is self invoked string');
                    
                })()

            // Callback function


            // Async function