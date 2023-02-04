const quotes = [
  {
    quote:
      "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라. ",
    author: "알버트 아인슈타인",
  },
  {
    quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
    author: "월트 디즈니",
  },
  {
    quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
    author: "윈스턴 처칠",
  },
  {
    quote:
      "나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.",
    author: "토마스 에디슨",
  },
  {
    quote: "위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.",
    author: "존 록펠러",
  },
  {
    quote: "인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.",
    author: "롤리 다스칼",
  },
  {
    quote: "마치지 않고 죽어도 되는 일만 내일로 미뤄라.",
    author: "파블로 피카소",
  },
  {
    quote: "성공으로 가는 길과 실패로 가는 길은 거의 똑같다.",
    author: "콜린 R. 데이비스",
  },
  {
    quote:
      "성공이란 절대 실수를 하지 않는 게 아니라 같은 실수를 두 번 하지 않는 것에 있다.",
    author: "조지버나드 쇼",
  },
  {
    quote:
      "동기 부여가 당신을 시작하게 한다. 습관이 당신을 계속 움직이게 한다.",
    author: "짐 륜",
  },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
