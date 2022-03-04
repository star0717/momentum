const quotes = [
  {
    quote: "퇴근하고싶다",
    author: "윤별",
  },
  {
    quote: "날로 먹고싶다",
    author: "윤별",
  },
  {
    quote: "소주 마렵다",
    author: "윤별",
  },
  {
    quote: "퇴근 어림도 없다",
    author: "윤별",
  },
  {
    quote: "나는야 멋쟁이",
    author: "윤별",
  },
  {
    quote: "나는야 예쁜이",
    author: "윤별",
  },
  {
    quote: "세상을 지배하는 건 바로 나",
    author: "윤별",
  },
  {
    quote: "초코는 귀엽다",
    author: "윤별",
  },
  {
    quote: "바쁘다 바빠 현대사회",
    author: "윤별",
  },
  {
    quote: "다 됐고 돈이나 주십쇼",
    author: "윤별",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
