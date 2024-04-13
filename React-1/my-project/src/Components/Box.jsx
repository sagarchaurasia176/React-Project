import { useEffect, useState } from "react";
import Generate from "./Generate";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "./Spinner";

function Box() {
  //change the states here

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  // randoms functions here
  const apiData = async () => {
    setLoading(true);

    const { data } = await axios.get(url);
    const imgSrc = data.data.images.downsized_medium.url;
    setGif(imgSrc);

    setLoading(false);
  };
  useEffect(() => {
    apiData();
  }, []);

  // button click generate
  const RandomGenerate = () => {
    apiData();
    toast.success("😊Enjoy");
  };


  return (
    <div>
      <div className=" grid grid-cols-2  w-4/5 p-1 m-auto  bg-white h-auto ">
        <div className=" m-auto h-auto w-auto p-2">
          {loading ? <Spinner /> : <img src={gif} alt="Image" />}
          <br></br>

          <Generate RandomGenerate={RandomGenerate} />
          {/* loading components */}
        </div>
        <div className="flex md:inline-flex bg-slate-500  ">
          <div className=" m-auto h-auto w-auto p-2">
            <img src="" alt="" />
            <br></br>
        <Input/>
            <Generate RandomGenerate={RandomGenerate} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Box;
