const prompt = require('prompt-sync')({ sigint: true });

// starting location
console.log('Welcome to the Sanctuary Forest, adventurer, beyond these trees lie a world fraught with danger. Only the bravest and most courageous can reach the eternal flame, and achieve immortality. Step forth, if you have what it takes. ');
let x = 0;
let y = 0;

// current location and actions changing location
while (true) {
  

  const action = prompt('Would you like to go north, south, east, or west? ');

  if ( action === 'north' ) {
      console.log('You have moved north.');
      y = y + 1;
    } else if (action === 'south') {
        console.log('You have moved south.');
        y = y - 1;
    } else if (action === 'east') {
        console.log('You have moved east.');
        x = x + 1;
    } else if (action === 'west') {
        console.log('You have moved west.');
        x = x - 1;
    }
// updated location 
    console.log('Your current location is:', x, y );
  
// if statements to add depth to the map and game
   if (x === -1 && y === -1) {
   console.log('Each step brings you closer to the edge of the Sanctuary Forest.');
   }else if (x === 1 && y === 1) {
    console.log('Each step brings you closer to the edge of the Sanctuary Forest.');
   }else if (x === -1 && y === 1) {
    console.log('Each step brings you closer to the edge of the Sanctuary Forest.');
   }else if (x === 1 && y === 0) {
    console.log('Each step brings you closer to the edge of the Sanctuary Forest.');
   }else if (x === -1 && y === 0) {
    console.log('Each step brings you closer to the edge of the Sanctuary Forest.');
   }else if (x === 0 && y === 2) {
    console.log('The scorching sun of the vast desert before you makes you miss the comfort of the Sanctuary. There seems to be a glimmer of light to the north. ');
   }else if (x === 0 && y === 3) {
    console.log('The scorching sun of the vast desert before you makes you miss the comfort of the Sanctuary. There seems to be a glimmer of light to the north. ');
   }else if (x === 1 && y === 2) {
    console.log('The scorching sun of the vast desert before you makes you miss the comfort of the Sanctuary. There seems to be a glimmer of light to the north. ');
   }else if (x === 1 && y === 3) {
    console.log('The scorching sun of the vast desert before you makes you miss the comfort of the Sanctuary. There seems to be a glimmer of light to the north. ');
   }else if (x === -1 && y === 2) {
    console.log('The scorching sun of the vast desert before you makes you miss the comfort of the Sanctuary. There seems to be a glimmer of light to the north. ');
   }else if (x === -1 && y === 3) {
    console.log('The scorching sun of the vast desert before you makes you miss the comfort of the Sanctuary. There seems to be a glimmer of light to the north. ');
   }else if (x === 0 && y === -1) {
    console.log('The forest has become dark and the air is suffocating.');
   }else if (x === -1 && y === -1) {
    console.log('The forest has become dark and the air is suffocating.');
   }else if (x === 1 && y === -1) {
    console.log('The forest has become dark and the air is suffocating.');
   }else if (x === 0 && y === -2) {
    console.log('You notice movement in the shadows of the forest. A feeling of panic takes you over.');
   }else if (x === -1 && y === -2) {
    console.log('You notice movement in the shadows of the forest. A feeling of panic takes you over.');
   }else if (x === 1 && y === -2) {
    console.log('You notice movement in the shadows of the forest. A feeling of panic takes you over.');
   }else if (x === -1 && y === -3) {
    console.log('An arrow flew from the darkness and pierced your heart. Start over.')
   }else if (x === 0 && y === -3) {
    console.log('An arrow flew from the darkness and pierced your heart. Start over.')
   }else if (x === 1 && y === -3) {
    console.log('An arrow flew from the darkness and pierced your heart. Start over.')
   }else if (x === 2 && y === 2) {
    console.log('You have stumbled upon an oasis, rest, weary adventurer.')
   }else if (x === 2 && y === 3) {
    console.log('You have stumbled upon a pile of bones, they seem to have been adventurers as well. They look mangled, chewed, and burned. Best turn back if you have no weapon.')
   }else if (x === 0 && y === 4) {
    console.log('The source of the glimmer is the hilt of an ancient sword, inscribed in the blade reads "Blade of light". The blade seems the have a heavy pull eastward. ')   
   }else if (x === 3 && y === 3) {
    console.log('A great fire breathing dragon has come forth, it bows to those who wield the blade of light and guides them east. All else meet a gruesome fate.')
   }else if (x === 4 && y === 3) {
       console.log('Congratulations, the eternal flame and immortality is yours!')
   }


}

 

   
  

  
  

