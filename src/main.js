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

  function AttributeTracker(tamagotchi) {
    setInterval(() => {
      $("#happiness").text(tamagotchi.happiness);
      $("#energy").text(tamagotchi.energy);
      $("#food").text(tamagotchi.food);
      $("#numberOfPoops").text(tamagotchi.numberOfPoops);
      if(tamagotchi.IsDead() === " DIED OF SADNESS!") {
        $(".buttons").hide();
        $(".tama").hide();
        $("form.pet-name").show();
        $(".dead").text(tamagotchi.name + tamagotchi.IsDead())
      }
      else if(tamagotchi.IsDead() === " DROWNED IN POOP!"){
        $(".buttons").hide();
        $(".tama").hide();
        $("form.pet-name").show();
        $(".dead").text(tamagotchi.name + tamagotchi.IsDead())
        $.ajax({
          url: `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=poop&rating=PG-13`,
          type: 'GET',
          data: {
            format: 'json'
          },
          success: function(response) {
            console.log(response);
            $('#errors').text("it worked");
            $('#errors').html(`<img src="${response.data.images.original.url}">`);
          },
          error: function() {
            $('#errors').text("There was an error processing your request. Please try again.");
          }
        });
      }
      else if(tamagotchi.IsDead() === " STARVED!") {
        $(".buttons").hide();
        $(".tama").hide();
        $("form.pet-name").show();
        $(".dead").text(tamagotchi.name + tamagotchi.IsDead())
        // delete tamagotchi;
        console.log(tamagotchi.food);
      }
    }, 1000);

  }
});
