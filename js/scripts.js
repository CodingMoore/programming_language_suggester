$(document).ready(function() {
  $("form#inputQs").submit(function(event) {
    const coat = $("input:radio[name=coat]:checked").val();
    
    //if (coat === coatVal1) {
    //  result = "Python"
    //}
    //else {
    //  result = "Java Script"
    //}
    //const result = ...
    
    $("#outputResult").text(result);
    $(".outputText").show();
    event.preventDefault();
  });
});