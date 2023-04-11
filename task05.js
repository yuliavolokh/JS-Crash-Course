//Task 1 
const time = {
  minutes: 30,
  hours: 1,
  seconds: 45,

  displayTime() {
    const formattedHours = this.hours.toString().padStart(2, '0');
    const formattedMinutes = this.minutes.toString().padStart(2, '0');
    const formattedSeconds = this.seconds.toString().padStart(2, '0');
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  },

  addSecond() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
        if (this.hours >= 24) {
          this.hours = 0;
        }
      }
    }
  },

  subtractSecond() {
    this.seconds--;
    if (this.seconds < 0) {
      this.seconds = 59;
      this.minutes--;
      if (this.minutes < 0) {
        this.minutes = 59;
        this.hours--;
        if (this.hours < 0) {
          this.hours = 23;
        }
      }
    }
  }
};
//Task 2
const car = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2022,
  averageSpeed: 60,

  displayInfo() {
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Average Speed: ${this.averageSpeed} mph`);
  },

  calculateTime(distance) {
    const hoursWithoutBreaks = distance / this.averageSpeed;
    const numBreaks = Math.floor(hoursWithoutBreaks / 4);
    const totalTime = hoursWithoutBreaks + numBreaks;
    return totalTime;
  }
};
