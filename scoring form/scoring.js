$(document).ready(function(){
  function score_indicate(){
    // By making such a description, in the variable called subject_points
    // You can create an array of [language score, English score, math score, science score, society score].
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // Furthermore, by making such a description, the total point is output to the right part: "total point:"
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    // write the process to output the average point referring to the above here
    let av = sum * 100 /500;
    $('#avarage_indicate').text(av);
  };
  
  function get_achievement(){
    // Write a process to output a string of rank values ("A" if the average score is 80 or more, "B" if it is 60 or more, "C" if it is 40 or more, "D" if it is less than 40)
  let av = $('#avarage_indicate').text();
  if (av >= 80){
    $('#evaluation').text('A');
  }
  else if (av >= 60) {
    $('#evaluation').text('B');  
  }
  else if (av >= 40) {
    $('#evaluation').text('C');  
  }
   else {
    $('#evaluation').text('D'); 
  }
   
return $('#evaluation').text();
}
  function get_pass_or_failure(){
    // write a process of giving a character string "pass" if all subjects have 60 or more points, and a character string of "fail" if there is at least one subject with less than 60 points.
    let subject_points = [$('#national_language').val(),
      $('#english').val(),
      $('#mathematics').val(),
      $('#science').val(),
      $('#society').val()
    ];
    for (let i = 0; i<subject_points.length; i++){
      let decision = "";
      if (subject_points[i]>60){
        //decision = 'Pass!!'
        $('#judge').text("Passed");
      }
      else{
        $('#judge').text("Failed");
     break; 
      }

    }
    return $('#judge').text();
  }

  function judgement(){
    // write the processing to output contents such as “Your grade is A when you press the “final judge” button.
    // By writing the following, if you click the button of "final judge", "Your grade is (the value of" rank "is put here). A process is implemented in which a light blue balloon with the text “(The value of“ judgment ”) is is output.
    // let rank = $('#evaluation').text();
    // let judge = $('#judge').text();
    let rank = get_achievement();
    let judge = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${rank}. You ${judge}</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});