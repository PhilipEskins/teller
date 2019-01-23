var luckyCount = 0;
var unluckyCount = 0;

// function counter() {
//   if (blarg2 === "black-cat") {
//     alert("works");
//   }
// }

// function messageGenerator (lucky, unlucky) {
//   var message;
//   if (lucky > unlucky) {
//     message = "You are lucky";
//   } else if (lucky < unlucky) {
//     message = "You are unlucky";
//   } else if (lucky === unlucky) {
//     message = "You are neutral";
//   }
//  return message;
// }

$(document).ready(function(){
  $("form#teller").submit(function(event){
    event.preventDefault();
    var fortuneSelections = [];
    $("#teller-responses").show();
    $("input:checkbox[name=event]:checked").each(function(){
      var fortuneEvents = $(this).val();
      fortuneSelections.push(fortuneEvents);
      // fortuneSelections.forEach(function(counter) {
      //   if (counter === "black-cat") {
      //     unluckyCount++;
      //     console.log(unluckyCount);
      //   } else if (counter === "toe") {
      //     unluckyCount++;
      //     console.log(unluckyCount);
      //   }
      // });
      for (var i = 0; i<1; i++) {
        if (fortuneSelections.includes("black-cat")) {
            unluckyCount++;
        }
        if (fortuneSelections.includes("toe")) {
            unluckyCount++;
        }
        if (fortuneSelections.includes("mirror")) {
            unluckyCount++;
        }
        if (fortuneSelections.includes("ladder")) {
            unluckyCount++;
        }
        if (fortuneSelections.includes("money")) {
            luckyCount++;
        }
        if (fortuneSelections.includes("clover")) {
            luckyCount++;
        }
        if (fortuneSelections.includes("rainbow")) {
            luckyCount++;
        }
        if (fortuneSelections.includes("winner")) {
            luckyCount++;
            console.log(unluckyCount);
            console.log(luckyCount);
        }
        // switch (fortuneSelections[i]) {
        //   case 'black-cat':
        //   unluckyCount++;
        //   break;
        //   case 'toe':
        //   unluckyCount++;
        //   break;
        // }
      }
      $('#teller-responses').append(fortuneEvents + "<br>");
    });
    // var phrase = messageGenerator(luckyCount, unluckyCount);
    console.log(unluckyCount);
    console.log(luckyCount);
    // $('#teller-responses').append(phrase + "<br>");
    $('#teller').hide();
  });
});
