import { Tamagotchi } from './tamagotchi';

$(document).ready(function() {
  let tamagotchi;
  $("form.pet-name").submit(function(event) {
    event.preventDefault();
    tamagotchi = new Tamagotchi(name);
    let name = $("input.name").val();
    $("form.pet-name").hide();
  });
  $("button#pet").click(function() {
    tamagotchi.Pet();
    console.log(tamagotchi.happiness);
  });
  $("button#feed").click(function() {
    tamagotchi.Feed();
    console.log(tamagotchi.food);
  });
  $("button#poopscoop").click(function() {
    tamagotchi.PoopScoop();
    console.log(tamagotchi.numberOfPoops);
  });
});
