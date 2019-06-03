import { Tamagotchi } from './../src/tamagotchi';

describe('Tamagotchi', function() {
  let sillyPet;

  beforeEach(function() {
    jest.useFakeTimers();
    sillyPet = new Tamagotchi("Silly Pet");
  });

  it('should have a name and food level of 10 when created', function() {
    expect(sillyPet.name).toEqual("Silly Pet");
    expect(sillyPet.food).toEqual(10);
    expect(sillyPet.poop).toEqual(0);
  });

  it('should have a food of 8 after 2001 millisecs', function() {
    jest.advanceTimersByTime(2001);
    expect(sillyPet.food).toEqual(8);
  });

  it('made poop', function() {
    jest.advanceTimersByTime(8001);
    expect(sillyPet.poop).toEqual(8);
  });

  it('actually pooped', function() {
    jest.advanceTimersByTime(11001);
    expect(sillyPet.numberOfPoops).toEqual(1);
  });

  it('scooped poop', function() {
    jest.advanceTimersByTime(19001);
    sillyPet.PoopScoop();
    expect(sillyPet.numberOfPoops).toEqual(0);
  });

  it('should get happier when you pet it', function() {
    sillyPet.Pet();
    expect(sillyPet.happiness).toEqual(30);
  });

  it('will check the happiness', function() {
    jest.advanceTimersByTime(4001);
    expect(sillyPet.happiness).toEqual(16);
  });

  it('will check if died of unhappiness', function() {
    sillyPet.happiness = 0;
    expect(sillyPet.IsDead()).toEqual("THAT MOTHER IS DEAD!")
  })

  it('will check if died of no food', function() {
    sillyPet.food = 0;
    expect(sillyPet.IsDead()).toEqual("THAT MOTHER IS DEAD!")
  })

  it('will check if drowned in poo', function() {
    sillyPet.numberOfPoops = 50;
    expect(sillyPet.IsDead()).toEqual("OH SHIT! IT DROWNED IN POOP!")
  })

      // ADD TESTS FOR SLEEPING

});
