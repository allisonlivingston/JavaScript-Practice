// -- SOLUTIONS --

// MY FIRST SOLUTION

function openOrSenior(data){
 var array = []

 for(let i=0; i<data.length; i++) {
   if(data[i][0]>=55 && data[i][1]>7) {
   array.push("Senior")
   } else {
   array.push("Open")
   }
  }
  return array
}
