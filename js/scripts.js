

$(document).ready(function(){
 $("form").submit(function(){
   event.preventDefault();
   var nameInput = $("#name").val();
   var animals = $("#animals").val();
   var house = $("input:radio[name=house]:checked").val();
   var character;

   if (animals === "owl"){
     if (house === "hufflepuff") {
       character = "Hermione";
     } else if (animals === "owl") {
       if (house === "gryffindor") {
         character = "Ron";
       } else if (animals === "owl") {
         if (house === slytherin) {
           character = "Malfoy";
         }
       }
     }
   }


 $("#output").text(character);
 });
});
