import React, { useState, useEffect } from "react";
import reload_icon from "../assets/reload.png";
import twitter_icon from "../assets/twitter.png";

export const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  });

  const [quotes, setQuotes] = useState([]);

  async function loadQuote() {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setQuotes(data);
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author && quote.author.split(",")[0]
      }`
    );
  };

  useEffect(() => {
    loadQuote();
  }, []);

  return (
    <div
      className="h-[100vh] relative bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&w=600)`,
      }}
    >
      <div className="container flex flex-col justify-center items-center absolute  bg-violet-900 bg-opacity-70  mt-[200px] w-[800px] mx-[300px] rounded-xl min-h-[400px]">
        <div className="quote p-[60px] text-[32px] text-white ">
          {quote.text}
        </div>
        <div className=" w-[680px] h-1 bg-white rounded-lg">
          <hr />
        </div>
        <div className="bottom flex justify-between w-[80%] items-center mt-[40px]">
          <div className="author text-white text-[25px] font-semibold">
            - {quote.author && quote.author.split(",")[0]}
          </div>
          <div className="icons flex h-[40px] gap-[30px] hover:cursor-pointer mix-blend-darken  ">
            <img
              className="border-[3px] border-black p-1 h-[48px] rounded-full hover:translate-y-2 hover:duration-100"
              src={reload_icon}
              onClick={() => {
                random();
              }}
            />
            <img
              className="hover:translate-y-2 hover:duration-100"
              src={twitter_icon}
              onClick={() => {
                twitter();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
