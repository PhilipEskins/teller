function messageGenerator (lucky, unlucky) {
  var message;
  if (lucky === unlucky) {
    message = "You are neutral";
  } else if (lucky < unlucky) {
    message = "You are unlucky";
  } else if (lucky > unlucky) {
    message = "You are lucky";
  }
  return message;
}

$(document).ready(function(){
  $("form#teller").submit(function(event){
    event.preventDefault();
    var goodCount = [];
    var badCount = [];
    $("#teller-responses").show();
    $("input:checkbox[name=badEvent]:checked").each(function(){
      var fortuneEvents = $(this).val();
      badCount.push(fortuneEvents);
    });
    $("input:checkbox[name=goodEvent]:checked").each(function(){
      var fortuneEvents = $(this).val();
      goodCount.push(fortuneEvents);
    });
      // $('#teller-responses').append(fortuneEvents + "<br>");

      var phrase = messageGenerator(goodCount.length, badCount.length);
      $('#teller-responses').append(phrase + "<br>");
      $('#teller').hide();
      console.log(goodCount);
      console.log(badCount);
  });
});

// function counter() {
//   if (blarg2 === "black-cat") {
//     alert("works");
//   }
// }

// for (var i = 0; i<1; i++) {
//   if (fortuneSelections.includes("black-cat")) {
//       unluckyCount++;
//   }
//   if (fortuneSelections.includes("toe")) {
//       unluckyCount++;
//   }
//   if (fortuneSelections.includes("mirror")) {
//       unluckyCount++;
//   }
//   if (fortuneSelections.includes("ladder")) {
//       unluckyCount++;
//   }
//   if (fortuneSelections.includes("money")) {
//       luckyCount++;
//   }
//   if (fortuneSelections.includes("clover")) {
//       luckyCount++;
//   }
//   if (fortuneSelections.includes("rainbow")) {
//       luckyCount++;
//   }
//   if (fortuneSelections.includes("winner")) {
//       luckyCount++;
//       console.log(unluckyCount);
//       console.log(luckyCount);
//   }
//   // switch (fortuneSelections[i]) {
//   //   case 'black-cat':
//   //   unluckyCount++;
//   //   break;
//   //   case 'toe':
//   //   unluckyCount++;
//   //   break;
//   // }
