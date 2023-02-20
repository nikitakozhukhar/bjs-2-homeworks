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
    let timeIndex = this.alarmCollection.find(item => item === time);
    this.alarmCollection.splice(timeIndex, 1);
  }

  getCurrentFormattedTime () {
    let date = new Date();
    
    let hour = addLeadingZero(date.getHours());
    let minutes = addLeadingZero(date.getMinutes());
    let currentTime = `${hour}:${minutes}`;
    function addLeadingZero (t) {
        return (t < 10) ? 0 + t : t;
      }
    return currentTime
  }

  start () {
    if (!intervalId) {
      return
    }
  }
    checkStart () {
      this.alarmCollection.forEach(item => {
        if (item === currentTime) {
          canCall = false;
          clock.callback();
        } 
      })
    }
    // setInterval(() => {this.alarmCollection.forEach(item => {
    //   if (item === currentTime) {
    //     canCall = false;
    //     clock.callback();
    //   } 
    // })
    // }, 1000);

}


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