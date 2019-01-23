var luckyCount = 0;
var unluckyCount = 0;

function messageGenerator (lucky, unlucky) {
  var message;
  if (lucky > unlucky) {
    message = "You are lucky";
  } else if (lucky < unlucky) {
    message = "You are unlucky";
  } else if (lucky === unlucky) {
    message = "You are neutral";
  }
 return message;
}

$(document).ready(function(){
  $("form#teller").submit(function(event){
    event.preventDefault();
    var fortuneSelections = [];
    $("#teller-responses").show();
    $("input:checkbox[name=event]:checked").each(function(){
      var fortuneEvents = $(this).val();
      fortuneSelections.push(fortuneEvents);
      for (var i = 0; i<fortuneSelections.length; i++) {
        // if (fortuneSelections.includes("black-cat", "ladder")) {
        //   unluckyCount++;
        //   alert(unluckyCount);
        // } else if (fortuneSelections.includes("mirror", "toe")) {
        //   unluckyCount++;
        //   alert(unluckyCount);
        // }
        // if (fortuneSelections.includes("money", "rainbow")) {
        //   luckyCount++;
        // } else if (fortuneSelections.includes("clover", "winner")) {
        //   luckyCount++;
        // }
        switch (fortuneSelections[i]) {
          case 'black-cat':
          alert("true");
          case 'toe':
          alert("toe");
          break;
        }
      }
      $('#teller-responses').append(fortuneEvents + "<br>");
    });
    var phrase = messageGenerator(luckyCount, unluckyCount);
    $('#teller-responses').append(phrase + "<br>");
    $('#teller').hide();
  });
});
