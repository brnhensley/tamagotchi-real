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

      if(tamagotchi.IsDeadSad()) {
        tamagotchi.DeadGif("sadness");
        dyingLogic(" died of sadness");
      }
      else if(tamagotchi.IsDeadPoop()) {
        tamagotchi.DeadGif("poop");
        dyingLogic(" drowned in poop");
      }
      else if(tamagotchi.IsDeadStarved()) {
        tamagotchi.DeadGif("starvation");
        dyingLogic(" starved");
      }

      function dyingLogic(deathType) {
        $(".buttons").hide();
        $(".tama").hide();
        $(".dead").text(tamagotchi.name + deathType);

        clearInterval(timer);
      }
    }, 1000);

  }

});
