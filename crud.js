// const fs = require('fs');

// fs.writeFile('newfile.txt', 'Hello, world!', (err) => {
//     if (err) throw err;
//     console.log('File created successfully!');
// });


// const newData = '\nThis is some additional content.';

// fs.appendFile('newfile.txt', newData, (err) => {
//     if (err) throw err;
//     console.log('New content added to file successfully!');
// });

// fs.readFile('newfile.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('File content:', data);
// });

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', () => {
    console.log('Hello, world!');
});


 myEmitter.emit('greet');
 myEmitter.on('data', (data) => {
    console.log('Received data:', data);
});

// Emitting the 'data' event with some data
myEmitter.emit('data', { message: 'Hello, world!' });
const listener = new EventEmitter();

listener.on('data', (data) => {
    console.log('data:',data);
});
listener.emit('data', 'Hello, world!' );

const listener2 = () =>{
    console.log('Updated content!');
}
myEmitter.on('change', listener2);

