$(document).ready(function() {
  $("form#inputQs").submit(function(event) {
    const coat = $("input:radio[name=coat]:checked").val();
    
    
    $(".outputText").show();
    event.preventDefault();
  });
});