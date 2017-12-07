//back end logic
var binary = function(number) {
var result = 0;
var numbers = number.split("");
numbers.reverse();
    for (var i=0; i < numbers.length; i += 1) {
      debugger;
      result = result + numbers[i] * Math.pow(2, i);
    }
    return result;
}






//ui logic

$(document).ready(function() {
  $("form#binary").submit(function(event) {
    event.preventDefault();
    var string = $("input#converter").val();
    var result = binary(string);
    $(".output").text(result);
  });
});
