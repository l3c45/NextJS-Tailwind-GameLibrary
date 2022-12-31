import { useState } from "react";

const SeachInput = () => {
  const [input, setInput] = useState("");

  const handlechangue = (e) => {
    setInput(e.target.value);
  };

  const sumbitForm = (e) => {
    e.preventDefault();
    console.log("envio", input);
    setInput("");
  };

  return (
    <form className="w-full md:w-auto" onSubmit={(e) => sumbitForm(e)} >
      <input
        onChange={(e) => handlechangue(e)}
        value={input}
        placeholder={"Search a game ..."}
        className="w-full md:w-auto h-10 md:h-8 rounded-xl text-right focus:outline-none px-2 placeholder:text-gray-500 italic"
      />
    </form>
  );
};

export default SeachInput;
