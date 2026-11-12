const showCount = 4;
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function maltaCalendar(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Malta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  }).formatToParts(now);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    year: Number(value("year")),
    month: Number(value("month")),
    day: Number(value("day")),
    weekday: weekdays.indexOf(value("weekday")),
  };
}

function addDays(year: number, month: number, day: number, days: number) {
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

export function upcomingShows(now = new Date()) {
  const today = maltaCalendar(now);
  const daysUntilSaturday = (6 - today.weekday + 7) % 7;
  const first = addDays(today.year, today.month, today.day, daysUntilSaturday);

  return Array.from({ length: showCount }, (_, index) => {
    const date = addDays(first.year, first.month, first.day, index * 7);
    return {
      date: `${String(date.day).padStart(2, "0")} ${months[date.month - 1]}`,
      city: "Malta",
      venue: "Club 77",
    };
  });
}
