const quotes = [
  "Everything is difficult until gets easy",
  "Seeing is believing",
  "Whatever you do, make it pay",
  "You will never know until you try",
  "No sweat, no sweet",
  "Let bygones be bygones",
  "No pain no gain",
  "Life is adventur or nothing",
  "She can do, he can do, why not me",
  "Pain past is pleasure",
  "Time is gold",
  "Rome was not built in a day",
  "A rolling stone gathers no moss",
];

const quote = document.querySelector(".quote span:first-child");

function TodayQuotes() {
  quote.innerText = "Today's Quotes : " + quotes[Math.ceil(Math.random() * 10)];
}

setInterval(TodayQuotes, 5000);
