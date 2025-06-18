// Importing 'readFile' and 'writeFile' functions from Node.js 'fs' (filesystem) module
const { readFile, writeFile } = require('fs');

// This log runs immediately (synchronous)
console.log('start');

// readFile(path, Unicode Transformation Format, callback) ==> utf8 converts the text in readable form, else we get a buffer<>
// Start reading the first file asynchronously
readFile('./firstFile.txt', 'utf8', (err, result) => {
    if (err) {
        // Handle error if first file reading fails
        console.log(err);
        return;
    }
    const firstFile = result;

    // Once first file is read, now read the second file asynchronously (nested callback)
    readFile('./secondFile.txt', 'utf8', (err, result) => {
        if (err) {
            // Handle error if second file reading fails
            console.log(err);
            return;
        }
        const secondFile = result;

        // This log comes later in the async flow
        console.log('creating file');

       //writeFile(path, data, callback)
        writeFile('./contents/subFolder/thirdFile-async.txt', `${firstFile},${secondFile}`, (err) => {
            if (err) {
                // Handle error during file writing
                console.log(err);
                return;
            }

            // Success! File created, and this logs the combined result
            console.log(`${firstFile},${secondFile}`);
        });
    });
});

// This runs immediately after 'start' log (asynchronous behavior demo)
console.log('next task');

// Output will be like:
// start
// next task
// creating file
// its the first file,its the second file
