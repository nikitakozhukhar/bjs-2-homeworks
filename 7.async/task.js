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
    console.log(this.alarmCollection);
    console.log(this.alarmCollection.length);
    return this.alarmCollection.filter(item => item.time === time);
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
    if (this.intervalId) {
      return
    } 
    const check = () => {
      this.alarmCollection.forEach(item => {
        if (item.time === this.getCurrentFormattedTime() && item.canCall) {
          item.canCall = false;
          item.callback();
        } 
      })
    }
      this.intervalId = setInterval(check, 1000);
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

