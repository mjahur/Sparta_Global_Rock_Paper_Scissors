// var usermove = prompt("Click '1' for rock, '2' for paper and '3' for scissors");
// console.log(usermove);
//
// function computerMove() {
//       return Math.floor((Math.random() * 3)+0);
//     };
// var compmove = computerMove();
// console.log(compmove);
//
// var compscore = 0;
// var userscore = 0;
//
// if (compmove == usermove) {
//   alert("Tie");
// }else if ((compmove == 1 && usermove == 3) || (compmove == 2 && usermove == 1) || (compmove == 3 && usermove == 2)) {
//  compscore++;
// }else{
//  userscore++;
// }
//
// console.log(userscore);
// console.log(compscore);
function converToWord(x){
  if (x==1){
    return "rock"
  }
  else if (x==2) {
    return "paper"
  }
  else if (x==3) {
    return "scissors"
  }
}
var compscore = 0;
var userscore = 0;
do{
  var usermove = prompt("Click '1' for rock, '2' for paper and '3' for scissors");
  var converToWord1 = converToWord(usermove);
  alert("Your move is "+ converToWord1);
  (function () {
    function computerMove() {
          return Math.floor((Math.random() * 3)+1);
        };
    var compmove = computerMove();
    var converToWord2 = converToWord(compmove);
   alert("competitions move is " + converToWord2);

    if (compmove == usermove) {
      alert("Tie");
    }else if ((compmove == 1 && usermove == 3) || (compmove == 2 && usermove == 1) || (compmove == 3 && usermove == 2)) {
     compscore++;
     alert("You lose this round");
    }else{
     userscore++;
     alert("You win this round!");
   }
   console.log(userscore, compscore);
  })()
}
  while (compscore!=5 && userscore!=5)

  if (compscore == 5) {
    alert( "You lose the game :( ")
  }
  else {
    alert("You win the game!!")
  }
