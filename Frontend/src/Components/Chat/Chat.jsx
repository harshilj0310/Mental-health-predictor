import { fetchChat, getSentiment } from "../../utils/fetchChat";
import "./Chat.css";
import { useEffect, useState, useRef } from "react";

function Chat() {
  const [history, setHistory] = useState([{ friend: "Hi, how was your day?" }]);

  useEffect(() => {
    const localData = localStorage.getItem("history");
    if (localData) {
      setHistory(JSON.parse(localData));
    } else {
      setHistory([{ friend: "Hi, how was your day?" }]);
    }
  }, []);

  const textAreaRef = useRef(null);
  const quesRef = useRef(null);

  const handleSubmit = async () => {
    let prompt = JSON.stringify([
      ...history,
      { user: textAreaRef.current.value },
    ]);
    prompt +=
      " You are user's friend and you have role to either show emotional support or to continue general conversations. Just reply with a response to him as a friend";
    const response = await fetchChat(prompt);
    const sentiment = await getSentiment(textAreaRef.current.value);

    if (response && sentiment.positive && sentiment.negative) {
      setHistory((hist) => [
        ...hist,
        {
          user: textAreaRef.current.value,
          friend: response,
          sentiment: sentiment,
        },
      ]);
      localStorage.setItem("history", JSON.stringify(history));
      textAreaRef.current.value = "";
      textAreaRef.current.focus();
    } else {
      window.alert("Failed! Please try again");
    }
    console.log(history);
  };

  return (
    <div className="quesPage">
      <div className="quesForm" ref={quesRef}>
        <div className="question">{history[history.length - 1].friend}</div>
        <textarea className="answer" ref={textAreaRef}></textarea>
        <button className="btn" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Chat;
