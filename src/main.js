import { Tamagotchi } from './tamagotchi';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Tama from './img/tama.jpg';

let tama = document.getElementById('tama');
tama.src = Tama;

$(document).ready(function() {
  let tamagotchi;
  $("form.pet-name").submit(function(event) {
    event.preventDefault();
    let name = $("input.name").val();
    tamagotchi = new Tamagotchi(name);
    $("form.pet-name").hide();
    $(".name-of-pet").text(name);
    AttributeTracker(tamagotchi);
    $(".buttons").show();
    $(".tama").show();
  });

  $("button#pet").click(function() {
    tamagotchi.Pet();
  });

  $("button#feed").click(function() {
    tamagotchi.Feed();
  });

  $("button#poopscoop").click(function() {
    tamagotchi.PoopScoop();
  });

  function AttributeTracker(tamagotchi) {
    let timer = setInterval(() => {
      $("#happiness").text(tamagotchi.happiness);
      $("#energy").text(tamagotchi.energy);
      $("#food").text(tamagotchi.food);
      $("#numberOfPoops").text(tamagotchi.numberOfPoops);
      if (tamagotchi.numberOfPoops)

      if(tamagotchi.IsDead() === " DIED OF SADNESS!") {
        tamagotchi.DeadGif("sadness");
        dyingLogic();
      }
      else if(tamagotchi.IsDead() === " DROWNED IN POOP!") {
        tamagotchi.DeadGif("poop");
        dyingLogic();
      }
      else if(tamagotchi.IsDead() === " STARVED!") {
        tamagotchi.DeadGif("starvation");
        dyingLogic();
      }

      function dyingLogic() {
        $(".buttons").hide();
        $(".tama").hide();
        $("form.pet-name").show();
        $(".dead").text(tamagotchi.name + tamagotchi.IsDead())
        clearInterval(timer);
      }
    }, 1000);



  }




});
