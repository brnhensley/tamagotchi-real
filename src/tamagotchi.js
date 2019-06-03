export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.poop = 0;
    this.numberOfPoops = 0;
    this.happiness = 20;
    this.energy = 10;
    this.awake = true;
    this.SetHunger();
    this.MakePoop();
    this.CheckHappiness();
  }

  MakePoop() {
    setInterval(() => {
      this.poop++;
      this.ActuallyPoop();
    }, 1000);
  }

  CheckHappiness() {
    setInterval(() => {
      this.happiness = ((this.hunger - this.poop - this.numberOfPoops) * 8);
      this.IsDead();
    },  1000);
  }

  ActuallyPoop() {
    if(this.poop >= 10) {
      this.poop = 0;
      this.numberOfPoops++;
    }
  }

  LowerEnergy() {
    setInterval(() => {
      this.energy--;
    }, 2000);
    if(this.energy < 0) {
      this.FallAsleep()
    }
  }

  FallAsleep()
  {
    this.awake = false;
    setTimeout(() => {
      this.awake = true;
      this.energy = 10;
    }, 5000);
  }

  PoopScoop() {
    this.numberOfPoops = 0;
  }

  SetHunger() {
    setInterval(() => {
      this.hunger--;
    }, 1000)
  }

  Pet() {
    this.happiness += 10;
  }

  IsDead() {
    if (this.happiness === 0 || this.hunger === 0) {
      let dead = "THAT MOTHER IS DEAD!"
      return dead;
    } else if (this.numberOfPoops === 50) {
      let drowned = "OH SHIT! IT DROWNED IN POOP!"
      return drowned;
    }
  }

}
