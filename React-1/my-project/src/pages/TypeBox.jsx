import { useState } from "react";
import Generate from "../Components/button/Generate";
import Spinner from "../Components/Spinner/Spinner";
import useCustom from "../hooks/useCustom";

function TypeBox(tag) {
  const [txt, setTxt] = useState("car");
  const {loading , gif , apiData} = useCustom(tag);
  // button click generate
  const RandomGenerate = () => {
    apiData();
    toast.success("😊Enjoy");
  };
  return (
    <div>
      <div className="  bg-slate-950   ">
        <div className="h-auto p-2">
          {loading ? <Spinner /> : <img className=" m-auto" src={gif} alt="" />}

          <br></br>

          <input
            onChange={(e) => {
              setTxt(e.target.value);
            }}
            value={txt}
            type="text"
            placeholder="enter any name "
            className=" p-2 m-auto flex w-4/5 rounded-md"
            name=""
            id=""
          />
          <br></br>
          <Generate RandomGenerate={RandomGenerate} />
        </div>
      </div>
    </div>
  );
}

export default TypeBox;
