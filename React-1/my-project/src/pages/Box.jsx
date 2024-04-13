import Generate from "../Components/button/Generate";
import toast from "react-hot-toast";
import Spinner from "../Components/Spinner/Spinner";
import useCustom from "../hooks/useCustom";
// BOX OF THE DATA HERE
function Box() {
  const { loading, gif, apiData } = useCustom();

  const RandomGenerate = () => {
    apiData();
    toast.success("😊Enjoy");
  };

  return (
    <div>
      <div className=" grid grid-cols-1  w-4/5 p-1 m-auto  h-auto ">
        <div className=" m-auto h-34 w-auto p-2">
          {loading ? <Spinner /> : <img src={gif} alt="Image" />}
          <br></br>
        </div>
        <Generate RandomGenerate={RandomGenerate} />
      </div>
    </div>
  );
}
export default Box;
