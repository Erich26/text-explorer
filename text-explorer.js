const prompt = require('prompt-sync')({ sigint: true });

// starting location

let x = 0;
let y = 0;

// current location and actions changing location
while (true) {
  

  const action = prompt('Would you like to go up, right, down, or left? ');

  if ( action === 'up' ) {
      console.log('You have moved up.');
      y = y + 1;
    } else if (action === 'down') {
        console.log('You have moved down.');
        y = y - 1;
    } else if (action === 'right') {
        console.log('You have moved right.');
        x = x + 1;
    } else if (action === 'left') {
        console.log('You have moved left.');
        x = x - 1;
    }
// updated location 
    console.log('Your current location is:', x, y );
  
}

   
  

  
  

