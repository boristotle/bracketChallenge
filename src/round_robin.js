roundRobin = function(arr) {
  if (arr.length % 2 != 0) {
    arr.push('(none)'); 
  }
  var halfArr1 = [], halfArr2 = [];
  for (var i = 0; i < arr.length / 2; i++) {
    halfArr1.push(arr[i]);
    halfArr2.push(arr[arr.length - 1 - i])
  }
  var tournament = [];
    for (var i = 0; i < arr.length - 1; i++) {
      var round = [];  
      for (var j = 0; j < halfArr1.length; j++){
        var temp = [];
        temp.push(halfArr1[j]);
        temp.push(halfArr2[j]);
        round.push(temp);
      }
      tournament.push(round)
      halfArr1.splice(1,0,halfArr2.shift());
      halfArr2.push(halfArr1.pop());
    }
   return tournament;
}



$(document).ready(function() {

  $('button').on('click', function() {
  var teamString = $('textarea').val();
    teams = teamString.split('\n');
    var matchups = roundRobin(teams);
      $('.matchups').html('');
      var output = "";
      for (var i = 0; i < matchups.length; i++) {
        output += "<div>Round " + (i + 1) + "<table><tr><th>Team 1</th><th>Team 2</th></tr>";
        for (var j = 0; j < matchups[i].length; j++){
          output += "<tr><td>" + matchups[i][j][0] + "</td><td>" + matchups[i][j][1] + "</td></tr>";
         }
         output += "</table></div>" 
      }
      console.log(output);
      $('.matchups').append(output)
        // console.log(matchups);

  })

})



