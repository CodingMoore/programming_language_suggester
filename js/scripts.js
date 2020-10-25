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

    $("#quizOutput div").hide();
    if (answerSum >= 5 && answerSum <= 8) {
      $(".outputPython").show();
    } else if (answerSum >= 9 && answerSum <= 12) {
      $(".outputJavaScript").show();
    } else if (answerSum >= 13 && answerSum <=16) {
      $(".outputShakespeare").show();
      $(".codeText").show();
    } else if (answerSum >= 17 && answerSum <= 20) {
      $(".outputDontBother").show();
    } else {
      alert("You seem to have left one or more of the questions un-answered.  Please answer all questions before clicking on the submit button")
    }
    $(document).scrollTop($(document).height());
    event.preventDefault();
  });
});