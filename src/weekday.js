class Weekday {
  getDay(year, month, date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const value = new Date(year, month - 1, date);
    return days[value.getDay()];
  }
}

export { Weekday };
