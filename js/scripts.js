$(document).ready(function() {
  $("#form0ne").submit(function(event) {
  event.preventDefault();

    let number1 = $("input#number1").val();
    let number2 = $("input#number2").val();
    
    if (number1 !== "" || number2 !== "" || number1 < 0 || number2 < 0) {
      number1 = parseInt(number1);
      number2 = parseInt(number2);
        for (let i = 0; i <= number1; i += number2) {
          alert(`Output: ${i}`);
        }
    } else {
      alert("enter a number");
    }
  });
});

//number1.
//number1.isInteger() || number2.isInteger()