class TimeData {
  constructor(date = new Date(),mark = ':') {
    this.date = date;
    this.mark = mark;
   
    this.Year = date.getFullYear();
    this.Month = date.getMonth() + 1;
    this.Day = date.getDate();
    this.Hours = date.getHours();
    this.Minutes = date.getMinutes();
    this.Seconds = date.getSeconds();
  }
  get ParseTimeObj() {
    return {
      Year: this.Year,
      Month: this.Month,
      Day: this.Day,
      Hours: this.Hours,
      Minutes: this.Minutes,
      Seconds: this.Seconds
    }
  }
  get ParseTimeArr() {
    return [
      this.Year,
      this.Month,
      this.Day,
      this.Hours,
      this.Minutes,
      this.Seconds
    ]
  }
  TimeToString(index) {
    return (index ? this.Keep(index) : this.ParseTimeArr).join(this.mark);
  }
  get TimeToStringInJp() {
    var D = this.ParseTimeObj;
    return D.Year + "年" + D.Month + "月" + D.Day + "日" + D.Hours + "時" + D.Minutes + "分";
  }
  Remove(index) {
    return this.ParseTimeArr.filter((element,index2) => {
      return index.every((element,index3,array) => {
        return array[index3] !== index2
      })
    })
  }
  Keep(index) {
    return this.ParseTimeArr.filter((element,index2) => {
      return !index.every((element,index3,array) => {
        return array[index3] !== index2
      })
    })
  }
}

module.exports = TimeData;