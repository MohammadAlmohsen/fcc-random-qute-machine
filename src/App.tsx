import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};
const transition= "all 1s";
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());
  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };
  return (
    <div className="background" style={{ backgroundColor: randomColor ,transition}}>
      <div id="quote-box" style={{ color: randomColor }}>
        <div className="quote-countent">
         
          <h2 id="text">
          <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
            </h2>
          
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22It%E2%80%99s%20your%20place%20in%20the%20world%3B%20it%E2%80%99s%20your%20life.%20Go%20on%20and%20do%20all%20you%20can%20with%20it%2C%20and%20make%20it%20the%20life%20you%20want%20to%20live.%22%20Mae%20Jemison"
            id="tweet-quote"
            style={{
              backgroundColor: randomColor,
              marginRight: "10px",
              transition
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomColor,transition }}
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
