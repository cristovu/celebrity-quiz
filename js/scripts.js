

$(document).ready(function(){
 $("form").submit(function(){
   event.preventDefault();
   var nameInput = $("#name").val();
   var animals = $("#animals").val();
   var house = $("input:radio[name=house]:checked").val();
   var character;

   if (animals === "owl" && house === "hufflepuff"){
       character = "Hermione";
     } else if (animals === "owl" && house === "gryffindor") {
         character = "Hermione";
       } else if (animals === "owl" && house === "slytherin") {
           character = "Hermione";
         }
   if (animals === "snake" && house === "hufflepuff"){
       character = "Malfoy";
     } else if (animals === "snake" && house === "gryffindor") {
         character = "Malfoy";
       } else if (animals === "snake" && house === "slytherin") {
           character = "Malfoy";
         }
   if (animals === "rat" && house === "hufflepuff"){
       character = "Ron";
     } else if (animals === "rat" && house === "gryffindor") {
         character = "Ron";
       } else if (animals === "rat" && house === "slytherin") {
           character = "Ron";
         }

 $("#output").text('Your Harry Potter character is ' + character + '.');
 });
});
