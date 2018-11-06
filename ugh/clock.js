class Clock {
  /**
   * Clock initialization
   */
  constructor() {
    this.hourHand = document.querySelector(".hours");
    this.hourNumber = this.hourHand.querySelector(".number");
    this.minuteHand = document.querySelector(".minutes");
    this.minuteNumber = this.minuteHand.querySelector(".number");
    this.secondHand = document.querySelector(".seconds");
    this.secondNumber = this.secondHand.querySelector(".number");

    this.timer();

    setInterval(() => this.timer(), 1000);
  }

  /**
   * Timer of the clock
   */
  timer() {
    this.sethandRotation("hour");
    this.sethandRotation("minute");
    this.sethandRotation("second");
  }

  /**
   * Changes the rotation of the hands of the clock
   * @param  {HTMLElement} hand   One of the hand of the clock
   * @param  {number}      degree degree of rotation of the hand
   */
  sethandRotation(hand) {
    let date = new Date(),
      hours,
      minutes,
      seconds,
      percentage,
      degree;

    switch (hand) {
      case "hour":
        hours = date.getHours();
        hand = this.hourHand;
        percentage = this.numberToPercentage(hours, 12);
        this.hourNumber.innerText = hours;
        break;
      case "minute":
        minutes = date.getMinutes();
        hand = this.minuteHand;
        percentage = this.numberToPercentage(minutes, 60);
        this.minuteNumber.innerText = minutes;
        break;
      case "second":
        seconds = date.getSeconds();
        hand = this.secondHand;
        percentage = this.numberToPercentage(seconds, 60);
        this.secondNumber.innerText = seconds;
        break;
    }

    degree = this.percentageToDegree(percentage);
    hand.style.transform = `rotate(${degree}deg)`;
  }

  /**
   * Converting a number to a percentage
   * @param  {number} number Number
   * @param  {number} max    Maximum value of the number
   * @return {number}        Return a percentage
   */
  numberToPercentage(number = 0, max = 60) {
    return number / max * 100;
  }

  /**
   * Converting a percentage to a degree
   * @param  {number} percentage Percentage
   * @return {number}            Return a degree
   */
  percentageToDegree(percentage = 0) {
    return percentage * 360 / 100;
  }
}

const animationStyle = "transition: transform 1s ease-in-out;";
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// set initial animation transition;
hours.style = animationStyle;
minutes.style = animationStyle;
seconds.style = animationStyle;

// initialize clock
setTimeout(() => {
  let clock = new Clock();

  // reset the transition
  setTimeout(() => {
    hours.style.transition = "";
    minutes.style.transition = "";
    seconds.style.transition = "";
  }, 1000);
}, 2000);
