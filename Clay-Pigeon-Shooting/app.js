// -- SOLUTION --

// MY SOLUTION

function shoot(x){
 let bool = x.map(array => array[1])
  x = x.map(array => array[0])

  let P1Score = 0
  let P2Score = 0

 for(let i=0; i<3; i++) {
   if(bool[i] == true && x[i].P1 == 'XX') {
     P1Score += 4
   } else if(bool[i] == true && x[i].P1 == 'XO' || bool[i] == true && x[i].P1 == 'OX' || bool[i] == false && x[i].P1 == 'XX') {
     P1Score += 2
   } else if(bool[i] == false && x[i].P1 == 'XO' || bool[i] == false && x[i].P1 == 'OX') {
     P1Score += 1
   }
 }

 for(let i=0; i<3; i++) {
   if(bool[i] == true && x[i].P2 == 'XX') {
     P2Score += 4
   } else if(bool[i] == true && x[i].P2 == 'XO' || bool[i] == true && x[i].P2 == 'OX' || bool[i] == false && x[i].P2 == 'XX') {
     P2Score += 2
   } else if(bool[i] == false && x[i].P2 == 'XO' || bool[i] == false && x[i].P2 == 'OX') {
     P2Score += 1
   }
 }
 return P1Score > P2Score ? 'Pete Wins!' : P2Score > P1Score ? 'Phil Wins!' : 'Draw!'
}
