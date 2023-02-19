import { useState } from "react";
import Lefthalf from "./lefthalf";
export default function Signup() {
  const [nextpage, setnextpage] = useState(false);
  return (
    <div className="flex w-screen h-screen bg-[#eff4f6] font-manrope flex-col md:flex-row">
      <Lefthalf />
      {nextpage?<Accountdetails nextpage={nextpage} setnextpage={setnextpage}/>: <Personaldetails nextpage={nextpage} setnextpage={setnextpage}/>}
    </div>
  );
}

function Personaldetails(props:any) {
  return (
    <div className="flex flex-1 justify-center items-center">
      <form className="flex  flex-col gap-6 p-6 bg-white  w-[100%] shadow-[0_4px_8px_2px_rgba(0,0,0,0,0,0.1) rounded-[16px] md:w-[400px]">
        <span className=" font-extrabold text-[24px]">Sign Up</span>
        <label className="relative cursor-pointer font-medium text-[18px] text-[#4E4E4E]">
          First Name<span className="text-red-500">*</span>
          <input
            type="text"
            className="w-[100%] border-2 border-slate-500 rounded-[4px] px-1 py-2 outline-none caret-[#2642d8]"
          ></input>
          <small className="absolute top-[100%] left-0 text-red-500 text-[12px]">
            First name is mandatory
          </small>
        </label>
        <label className="relative cursor-pointer font-medium text-[18px] text-[#4E4E4E]">
          Last Name<span className="text-red-500">*</span>
          <input
            type="text"
            className="w-[100%] border-2 border-slate-500 rounded-[4px] px-1 py-2 outline-none caret-[#2642d8]"
          ></input>
          <small className="absolute top-[100%] left-0 text-red-500 text-[12px]">
            Last name is mandatory
          </small>
        </label>
        <label className="relative cursor-pointer font-medium text-[18px] text-[#4E4E4E]">
          Date Of Birth <span className="text-red-500">*</span>
          <input
            type="date"
            className="w-[100%] border-2 border-slate-500 rounded-[4px] px-1 py-2 outline-none cursor-pointer"
          ></input>
          <small className="absolute top-[100%] left-0 text-red-500 text-[12px]">
            Date of birth is mandatory
          </small>
        </label>
        <button
        onClick={()=>props.setnextpage(!props.nextpage)}
          type="submit"
          className="bg-[#2642d8] w-[100%] h-[47px] rounded-[4px] text-white cursor-pointer mt-[2px] font-medium text-[18px]"
        >
          Continue
        </button>
        <div className="text-center">
          Already have an Account?{" "}
          <a href="#" className="underline text-[#2642d8]">
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
}

function Accountdetails(props:any) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <form className="w-[100%] flex flex-col gap-6 p-6 bg-white shadow-[0_4px_8px_2px_rgba(0,0,0,0,0,0.1) rounded-[16px] md:w-[400px]">
        <div>
        <span className="flex items-center cursor-pointer" onClick={()=>props.setnextpage(!props.nextpage)}>
          <span className="material-symbols-outlined">chevron_left</span>
          <span>back</span>
        </span>
        <div className="font-extrabold text-[24px]">Sign Up</div>
        </div>
        <label className="cursor-pointer font-medium text-[18px] text-slate-500">
          Mobile Number
          <input
            type="number"
            className="w-[100%] px-1 py-2 outline-none border-2  border-slate-500 rounded-[4px] caret-[#2642d8]"
          ></input>
        </label>
        <label className=" cursor-pointer text-slate-500 font-medium text-[18px] relative">
          Email<span className="text-red-500">*</span>
          <input
            type="email"
            className="w-[100%] px-1 py-2 outline-none border-2  border-slate-500 rounded-[4px] caret-[#2642d8]"
          ></input>
          <small className="text-red-500 absolute left-0 top-[100%] text-[12px]">Email is incorrect</small>
        </label>
        <label className=" cursor-pointer text-slate-500 font-medium text-[18px] relative">
          Password<span className="text-red-500">*</span>
          <input
            type="password"
            className="w-[100%] px-1 py-2 outline-none border-2  border-slate-500 rounded-[4px] caret-[#2642d8]"
          ></input>
          <small className="text-red-500 absolute left-0 top-[100%] text-[12px]">Password is incorrect</small>
        </label>
        <button
          type="submit"
          className="bg-[#2642d8] h-[46px] text-white rounded-[4px] cursor-pointer font-medium text-[18px]"
        >
          Sign Up
        </button>
        <div className="text-center">
          Already have an account?{" "}
          <a href="#" className="underline text-[#2642d8]">
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
}
