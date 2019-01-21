 $(".show-hide").click(function() {
   var text = $(this).text();
   if (text == "Read More >>") {
     $(".show-hide").text("Read Less <<");
   } else {
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
 $(".btn-form").click(function() {
   var textarea = $('.textareaform').val();
   var sub = $('.nameform').val();
   var sub1 = $('.surnameform').val();
   var sub2 = $('.countryform').val();
   var subject = sub + " " + sub1 + " from " + sub2;
   window.open('mailto:caushibedir0@gmail.com?subject=' + subject + '&body=' + textarea);
 });
 $(".contain").fadeIn(1500);

 $(".show-hide1").click(function() {
   var text = $(this).text();
   if (text == "Read More >>") {
     $(".show-hide1").text("Read Less <<");
   } else {
     $(".show-hide1").text("Read More >>");
   }
   $(".pula-toggle").slideToggle();
 });
 $(".show-hide2").click(function() {
   var text = $(this).text();
   if (text == "Read More >>") {
     $(".show-hide2").text("Read Less <<");
   } else {
     $(".show-hide2").text("Read More >>");
   }
   $(".medulin-toggle").slideToggle();
 });
 $(".show-hide3").click(function() {
   var text = $(this).text();
   if (text == "Read More >>") {
     $(".show-hide3").text("Read Less <<");
   } else {
     $(".show-hide3").text("Read More >>");
   }
   $(".premantura-toggle").slideToggle();
 });
 $(".btn-rand1").click(function() {
   var i = 1 + Math.floor(Math.random() * 5);
   switch (i) {
     case 1:
       $(".btn-rand").text("You should visit Pula");
       break;
     case 2:
       $(".btn-rand").text("You should visit Premantura");
       break;
     case 3:
       $(".btn-rand").text("You should visit Rovinj");
       break;
     case 4:
       $(".btn-rand").text("You should visit Porec");
       break;
     case 5:
       $(".btn-rand").text("You should visit Vrsar");
       break;
     default:
       $(".btn-rand").text("You should visit Medulin");
     }
     });


   // }
   // if (i === 0) {
   //   $(".btn-rand").text("Bedir");
   // }
   // if (i === 1) {
   //   $(".btn-rand").text("Bedir");
   // }
   // if (i === 2) {
   //   $(".btn-rand").text("Bedir");
   // }
   // if (i === 3) {
   //   $(".btn-rand").text("Bedir");
   // }
   // if (i === 4) {
   //   $(".btn-rand").text("Bedir");
   // }
   // if (i === 5) {
   //   $(".btn-rand").text("Bedir");
   // }
   // if (i === 6) {
   //   $(".btn-rand").text("Bedir");
   // }
   // if (i === 7) {
   //   $(".btn-rand").text("Bedir");
   // }
   // if (i === 8) {
   //   $(".btn-rand").text("Bedir");
   // }
   // if (i === 9) {
   //   $(".btn-rand").text("Bedir");
   // }
