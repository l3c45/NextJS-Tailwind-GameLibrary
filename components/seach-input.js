import { useState } from "react";

const SeachInput = ({search}) => {
  const [input, setInput] = useState("");

  const handlechangue = (e) => {
    setInput(e.target.value);
  };

  const sumbitForm = (e) => {
    e.preventDefault();
    search(input)
    setInput("");
  };

  return (
    <form className="w-full md:w-auto" onSubmit={(e) => sumbitForm(e)} >
      <input
        onChange={(e) => handlechangue(e)}
        value={input}
        spellCheck={false}
        placeholder={"Search a game ..."}
        className="w-full md:w-auto h-10 md:h-8 rounded-xl text-right focus:outline-none px-2 placeholder:text-gray-500 italic text-white bg-zinc-800 focus:bg-zinc-800"
      />
    </form>
  );
};

export default SeachInput;
