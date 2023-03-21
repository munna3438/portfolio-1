/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from "react";
import "./contect.scss";

const stext = "Thanks for your massege .i will reply soon";
const ftext = "Massege faild place try agin";
const Contect = () => {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState(false);
  const [value, setValue] = useState("");
  const inputHandle = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(true);
    value === "" ? setText(ftext) : setText(stext);
    setValue("");
  };

  return (
    <div className="contect" id="contect">
      <div className="left">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12232.631358354354!2d89.89945469851186!3d24.284301432830976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDE3JzAwLjMiTiA4OcKwNTQnMjQuNyJF!5e0!3m2!1 bn!2sbd!4v1679401099952!5m2!1sbn!2sbd"></iframe>
      </div>
      <div className="right">
        <h2>Contect.</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            type="text"
            placeholder="enter your mail"
            onChange={inputHandle}
          />
          <textarea
            placeholder="type your massege"
            cols="30"
            rows="10"></textarea>
          <button type="submit">Send</button>

          {msg && <span>{text}</span>}
        </form>
      </div>
    </div>
  );
};

export default Contect;
