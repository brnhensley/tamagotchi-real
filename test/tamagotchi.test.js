import { Tamagotchi } from './../src/tamagotchi';
import $ from 'jquery';

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
    jest.advanceTimersByTime(20001);
    sillyPet.PoopScoop();
    expect(sillyPet.numberOfPoops).toEqual(1);
  });

  it('should get happier when you pet it', function() {
    sillyPet.Pet();
    expect(sillyPet.happiness).toEqual(65);
  });

  it('will check the happiness', function() {
    jest.advanceTimersByTime(4001);
    expect(sillyPet.happiness).toEqual(51);
  });

  it('will check if died of unhappiness', function() {
    sillyPet.happiness = 0;
    expect(sillyPet.IsDeadSad()).toEqual(true)
  });

  it('will check if died of no food', function() {
    sillyPet.food = 0;
    expect(sillyPet.IsDeadStarved()).toEqual(true)
  });

  it('will check if drowned in poo', function() {
    sillyPet.numberOfPoops = 5;
    expect(sillyPet.IsDeadPoop()).toEqual(true)
  });

  it('will check if energy is lower', function() {
    jest.advanceTimersByTime(9001);
    expect(sillyPet.energy).toEqual(1);
  });

  it('will check if fell asleep', function() {
    jest.advanceTimersByTime(10001);
    expect(sillyPet.awake).toEqual(false);
  });

  it('will check if fell asleep', function() {
    jest.advanceTimersByTime(15001);
    expect(sillyPet.energy).toEqual(10);
    expect(sillyPet.awake).toEqual(true);
  });

  it('will check if fed', function() {
    sillyPet.Feed();
    expect(sillyPet.food).toEqual(30);
  });

  // it('it will check ajax function', function() {
  //   //Possibly untestable
  //   sillyPet.DeadGif("ass");
  // });

});
