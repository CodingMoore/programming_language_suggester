$(document).ready(function() {
  $("form#inputQs").submit(function(event) {
    const coat = $("input:radio[name=coat]:checked").val();
    const tvShow = $("input:radio[name=tvShow]:checked").val();
    const prison = $("input:radio[name=prison]:checked").val();
    const pet = $("input:radio[name=pet]:checked").val();
    const love = $("input:radio[name=love]:checked").val();
    const coatInt = parseInt(coat);
    const tvShowInt = parseInt(tvShow);
    const prisonInt = parseInt(prison);
    const petInt = parseInt(pet);
    const loveInt = parseInt(love);
    const answerSum = (coatInt + tvShowInt + prisonInt + petInt + loveInt);
    alert(answerSum);
    //alert(coatInt);
    //alert(tvShowInt);
    //alert(prisonInt);
    //alert(petInt);
    //alert(loveInt);
    //alert(coatInt + tvShowInt + prisonInt + petInt + loveInt);
    

    
    $("#outputResult").text(result);
    $(".outputText").show();
    event.preventDefault();
  });
});