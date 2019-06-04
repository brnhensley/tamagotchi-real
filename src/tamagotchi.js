// import $ from 'jquery';

export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.food = 10;
    this.poop = 9;
    this.numberOfPoops = 0;
    this.happiness = 55;
    this.energy = 10;
    this.awake = true;
    this.SetHunger();
    this.MakePoop();
    this.CheckHappiness();
    this.LowerEnergy();
  }

  MakePoop() {
    setInterval(() => {
      this.poop++;
      this.ActuallyPoop();
    }, 1000);
  }

  ActuallyPoop() {
    if(this.poop >= 10) {
      this.poop = 0;
      this.numberOfPoops++;
    }
  }

  PoopScoop() {
    if(this.numberOfPoops >= 1) {
    this.numberOfPoops--;
    }
  }

  CheckHappiness() {
    setInterval(() => {
      this.happiness--;
      this.IsDeadSad();
    },  1000);
  }

  Pet() {
    this.happiness += 10;
  }

  LowerEnergy() {
    setInterval(() => {
      this.energy--;
      if(this.energy < 0) {
        this.FallAsleep()
      }
    }, 1000);
  }

  FallAsleep()
  {
    this.awake = false;
    setTimeout(() => {
      this.awake = true;
      this.energy = 10;
    }, 5000);
  }

  SetHunger() {
    setInterval(() => {
      this.food--;
    }, 1000)
  }

  Feed() {
    this.food += 20;
  }

  IsDeadSad() {
    if (this.happiness === 0) {
      // let dead = " DIED OF SADNESS!"
      return true;
    }
  }

  IsDeadPoop() {
    if (this.numberOfPoops === 5) {
      // let drowned = " DROWNED IN POOP!"
      return true;
    }
  }

  IsDeadStarved() {
    if (this.food === 0) {
      // let starved = " STARVED!"
      return true;
    }
  }

  DeadGif(deathcause){
    $.ajax({
      url: `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=${deathcause}&rating=PG-13`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.gif').html(`<img src="${response.data.images.original.url}">`);
        $(".gif").show();
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      },
    });
  }

}
