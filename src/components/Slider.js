import React, { useState } from "react";
import {
  BsFillChatLeftQuoteFill,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsChatRightQuote,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import data from "../data";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const toggleNext = () => {
    if (index === 3) {
      return setIndex(0);
    }
    setIndex((prevState) => {
      return prevState + 1;
    });
  };
  const togglePrev = () => {
    if (index === 0) {
      return setIndex(3);
    }
    setIndex((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <>
      <div className="section-center">
        {people.map((person, personIndex) => {
          console.log(index);
          const { id, title, quote, name, image } = person;
          let position = "nextSlide";
          if (index === personIndex) {
            position = "activeSlide";
          }
          if (personIndex === index - 1) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={`article ${position}`}>
              <img src={image} alt={name} className="img-person"></img>
              <h4>{name.toLocaleUpperCase()}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <BsChatRightQuote className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={togglePrev}>
          <BsCaretLeftFill />
        </button>
        <button className="next" onClick={toggleNext}>
          <BsCaretRightFill />
        </button>
      </div>
    </>
  );
};

export default Slider;
