import React from "react";
function Generate(props) {
  const RandomGenerate = props.RandomGenerate;

  return (
    <div>
      <button
        onClick={RandomGenerate}
        class="bg-violet-500  rounded-md p-2
    hover:bg-violet-600 active:bg-violet-700 w-full
    focus:outline-none focus:ring focus:ring-violet-300 ..."
      >
        Click TO Generate
      </button>
    </div>
  );
}

export default Generate;
