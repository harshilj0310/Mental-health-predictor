// import "./Questions.css";
import { useRef, useState } from "react";
import { getSentiment } from "../../utils/fetchChat";

const questions = [
  {
    question: "Who is the president of India?",
    answer: "",
  },
  {
    question: "How many states are there in India?",
    answer: "",
  },
  {
    question: "What is the capital of India?",
    answer: "",
  },
];

function Questions() {
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState(false);
  const textareaRef = useRef(null);

  const handleSubmit = async () => {
    if (current === questions.length - 1) {
      for (const ques of questions) {
        ques.sentiment = await getSentiment(ques.answer);
      }
      setResults(true);
      console.log(questions);
    } else {
      textareaRef.current.value = questions[current + 1].answer;
      setCurrent((curr) => curr + 1);
      textareaRef.current.focus();
    }
  };

  if (!results)
    return (
      <div className="quesPage">
        <div className="quesForm">
          <div className="question">{questions[current].question}</div>
          <textarea
            className="answer"
            ref={textareaRef}
            onChange={(e) => {
              questions[current].answer = e.target.value;
            }}
          ></textarea>
          <div className="btns" style={{ gap: "10px", display: "flex" }}>
            {current !== 0 && (
              <button
                className="btn"
                onClick={() => {
                  textareaRef.current.value = questions[current - 1].answer;
                  setCurrent((curr) => curr - 1);
                  textareaRef.current.focus();
                }}
              >
                Prev
              </button>
            )}
            <button className="btn" onClick={handleSubmit}>
              {current === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="quesPage">
        <div className="quesForm">
          {questions.map((ques) => {
            return (
              <div className="ques">
                <div>{ques.question}</div>
                <div>{ques.answer}</div>
                <div className="sentiment-bar">
                  <div
                    className="neg"
                    style={{ width: `${5 * ques.sentiment.negative}%` }}
                  ></div>
                  {/* <div
                    className="neu"
                    style={{ width: `${3.33 * ques.sentiment.neutral}%` }}
                  ></div> */}
                  <div
                    className="pos"
                    style={{ width: `${5 * ques.sentiment.positive}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
          <button
            className="btn"
            onClick={() => {
              setResults(false);
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
}

export default Questions;
