const quotes = [
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    meaning: '시작하는 방법은 말을 멈추고 행동을 하는 것입니다.',
    author: 'Walt Disney',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    meaning: '인생은 당신이 다른 계획을 세우느라 바쁠 때 일어나는 것이다.',
    author: 'John Lennon',
  },
  {
    quote:
      'The world is a book and those who do not travel read only one page.',
    meaning: '세상은 책이고 여행하지 않는 사람은 한 페이지만 읽는다.',
    author: 'Saint Augustine',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    meaning: '인생은 대담한 모험이거나 아니면 아무것도 아니다.',
    author: 'Helen Keller',
  },
  {
    quote: 'To Travel is to Live',
    meaning: '여행은 사는 것이다.',
    author: 'Hans Christian Andersen',
  },
  {
    quote: 'Only a life lived for others is a life worthwhile.',
    meaning: '남을 위해 산 삶만이 가치 있는 삶이다.',
    author: 'Albert Einstein',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    meaning: '단 한번을 살아도 바르게 산다면 그걸로 충분하다.',
    author: 'Mae West',
  },
  {
    quote: "Never go on trips with anyone you don't love.",
    meaning: '사랑하지 않는 사람과는 여행을 절대 가지 마세요.',
    author: 'Hemmingway',
  },
  {
    quote: 'We wander for distraction, but we travel for fulfilment.',
    meaning:
      '우리가 돌아다니는 건 머리를 식히기 위해서이고 여행하는건 충족을 위해서입니다.',
    author: 'Hilaire Belloc',
  },
  {
    quote: 'Travel expands the mind and fills the gap.',
    meaning: '여행은 마음을 넓히고 그 간극을 채웁니다.',
    author: 'Sheda Savage',
  },
];

const quote = document.querySelector('#quote span:first-child');
const meaning = document.querySelector('#quote span:nth-child(2)');
const author = document.querySelector('#quote span:last-child');

// quotes 의 개수만큼 random Number 를 생성
// quotes 데이터에서 랜덤으로 생성된 위치의 값을 가져옴
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// 가져온 값을 넣어 줌
quote.innerText = todaysQuote.quote;
meaning.innerText = `( ${todaysQuote.meaning} )`;
author.innerText = `- ${todaysQuote.author}`;

console.log(todaysQuote);
