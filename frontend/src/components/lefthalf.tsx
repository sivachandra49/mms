import  imgurl from "../assets/rafiki.svg";
export default function Lefthalf() {
  return (
    <div className="flex-1 text-white bg-[#3a3fc7]  flex flex-col items-center justify-center">
      <div className="pb-2 font-extrabold text-[38px]">MMS</div>
      <div className="font-semibold text-xl pb-2"> Manage your money in a single place</div>
      <div><img src={imgurl} alt="money image" width="400" height="400"></img></div>
    </div>
  );
}
