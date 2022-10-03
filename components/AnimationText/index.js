import { css } from "goober";
import { hoverColor, primaryColor } from "../../styles/jss/nextjs-material-kit";

function AnimationText({ text, isDisplayed }) {
  console.log(
    "🚀 ~ file: index.js ~ line 5 ~ AnimationText ~ isDisplayed - child",
    isDisplayed
  );

  return (
    <div className={css(cssTextContainer)}>
      {text.split("").map((letter, i) => (
        <span
          key={`${letter}-${i}`}
          className={css(isDisplayed ? cssLetterEnd(i) : cssLetterStart())}
        >
          {letter !== " " ? (
            letter
          ) : (
            <span className={css({ padding: "25px" })}></span>
          )}
        </span>
      ))}
    </div>
  );
}

export default AnimationText;

const rand = (max) => {
  return Math.floor(Math.random() * max) * (Math.random() < 0.5 ? -1 : 1);
};

const cssTextContainer = {
  marginBottom: "100px",
};

const cssLetter = {
    textShadow: `4px 3px 1px ${hoverColor}, 9px 8px 1px ${primaryColor}`,
    display: "inline-block",
    fontSize: "6rem",
};

const cssLetterStart = () => ({
  ...cssLetter,
  transform: `translateX(${rand(1000)}px) translateY(${rand(
    2000
  )}px) scale(0) rotate3d(${Math.random() < 0.5 ? -1 : 1}, ${
    Math.random() < 0.5 ? -1 : 1
  }, ${Math.random() < 0.5 ? -1 : 1}, ${rand(1800)}deg)`,
  transition: "none",
});

const cssLetterEnd = (i) => ({
  ...cssLetter,
  transform: "translateX(0) translateY(0) scale(1) rotate3d(0)",
  transition: `all 2s ease ${100*i}ms`,
});
