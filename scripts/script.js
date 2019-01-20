 $(".show-hide").click(function() {
     var text = $(this).text();
     if (text == "Read More >>" ) {
         $(".show-hide").text("Read Less <<");
    }else {
        $(".show-hide").text("Read More >>");
   }
    $(".toggle-paragraph").slideToggle();
 });
// $(".show-hide").click(toggletheslide(".toggle-paragraph"));
//
//  function toggletheslide(paragrapgh)
//   {
//     var text = $(this).text();
//     if (text == "Read More >>" ) {
//         $(".show-hide").text("Read Less <<");
//     }else {
//         $(".show-hide").text("Read More >>");
//     }
//     $("paragraph").slideToggle();
//   }
$(".btn-form").click(function(){
  var textarea=$('.textareaform').val();
  var sub=$('.nameform').val();
  var sub1=$('.surnameform').val();
  var sub2=$('.countryform').val();
  var subject=sub+" "+sub1+" from "+sub2;
  window.open('mailto:caushibedir0@gmail.com?subject='+subject+'&body='+textarea);
});
