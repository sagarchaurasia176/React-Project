import React from "react";

function Generate({ RandomGenerate }) {
  // const { RandomGenerate } = RandomGenerate.props;
  // const { setLoading } = setLoading.props;

  return (
    <div>
      <button
        onClick={RandomGenerate}
        class="bg-violet-500 p-1 rounded-md
    hover:bg-violet-600 active:bg-violet-700 
    focus:outline-none focus:ring focus:ring-violet-300 ..."
      >
        Click TO Generate
      </button>
    </div>
  );
}

export default Generate;
