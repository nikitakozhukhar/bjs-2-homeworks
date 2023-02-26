//git add -A
//git commit -m ""
//git pull
//git push -u origin bjs-53
  
  class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
    
  }
  
  addClock (time, callback) {
     if (time == undefined || callback == undefined) {
      throw new Error('Отсутствуют обязательные аргументы')
    };

    if (this.alarmCollection.find(item => item === time)){
      console.warn('Уже присутствует звонок на это же время')
    }
    let obj = {
      callback: callback,
      time: time,
      canCall: true
    }
    this.alarmCollection.push(obj)
  }
  removeClock (time) {
    console.log(clock.alarmCollection.length);
   return this.alarmCollection.filter(item => item['time'] !== time);
    
    // this.alarmCollection.splice(timeIndex, 1);
    // console.log(clock.alarmCollection.length)
  }

  getCurrentFormattedTime () {
    let date = new Date();
    
    let hour = addLeadingZero(date.getHours());
    let minutes = addLeadingZero(date.getMinutes());
    let currentTime = `${hour}:${minutes}`;
    function addLeadingZero (t) {
        return (t < 10) ? '0' + t : t;
      }
    return currentTime
  }

  start () {
    if (!this.intervalId) {
      return
    } else {
      let interval = setInterval(checkStart, 1000);
      this.intervalId = interval;
    }
    console.log(interval)
  }
    checkStart () {
      let flafToCall = this.alarmCollection.forEach(item => {
        if (item['time'] === currentTime) {
          canCall = false;
          clock.callback();
          this.intervalId = flafToCall;
        } 
      })
    }

   stop() {
    clearInterval(this.interval);
    this.intervalId = null;
   }

   resetAllCalls () {
    this.alarmCollection.forEach(item => item.canCall = true)
   }

   clearAlarms() {
    stop();
    this.alarmCollection = [];
   }
}

let clock = new AlarmClock();
const callback = f => f;
clock.addClock("16:45", callback);
clock.addClock("16:45", callback);
clock.addClock("16:45", callback);
clock.addClock("16:46", callback);
// console.log(`интервал: ${clock.intervalId}`);
// clock.addClock("16:45", f => f);
// clock.start();
// console.log(clock.alarmCollection);
// clock.stop();
/*
 // let date = new Date();
    // time = `${hour}: ${minutes}`;
    // let hour = addLeadingZero(date.getHours());
    // let minutes = addLeadingZero(date.getMinutes());
    // console.log(time);
    // console.log(callback);

    // function addLeadingZero (t) {
    //   return (t < 10) ? 0 + t : t;
    // }

*/