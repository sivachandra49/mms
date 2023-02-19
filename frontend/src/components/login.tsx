import Lefthalf from "./lefthalf";
export default function Login() {
  return (
    <div className="flex h-screen w-screen flex-col bg-[#eff4f6] font-manrope md:flex-row">
       <Lefthalf />
      <div className="login-right flex items-center justify-center flex-1">
        <form className="flex flex-col w-[100%] gap-6 p-6 bg-white shadow-[0_4px_8px_2px_rgba(0,0,0,0,0,0.1)] md:w-[400px] md:rounded-[16px]">
          <span className=" font-extrabold text-[24px]">Sign In</span>
          <label className="cursor-pointer text-[#4E4E4E] relative font-medium text-[18px]">
            Email<span className="text-red-500">*</span>
            <input
              type="text"
              className="w-[100%] border-2 border-slate-500 px-1 py-2 rounded-[4px] outline-none caret-[#2642d8]"
            ></input>
            <span className=" absolute top-[100%]  text-[12px] left-0 text-red-500">
              Email is incorrect
            </span>
          </label>
          <label className="cursor-pointer text-[#4E4E4E] font-medium text-[18px] relative">
            Password<span className="text-red-500">*</span>
            <input
              type="password"
              className="w-[100%] border-2 border-slate-500 px-1 py-2 rounded-[4px] outline-none caret-[#2642d8]"
            ></input>
            <span className="absolute top-[100%] left-0 text-[12px]  text-red-500">
              Password is incorrect
            </span>
          </label>

          <a
            href="https://www.google.com/maps"
            className="text-right cursor-pointer text-blue-700  underline"
          >
            Forgot Password?
          </a>
          <button
            type="submit"
            className="w-[100%] bg-[#2642d8] h-[47px] rounded-[4px] font-medium text-[18px] text-white cursor-pointer"
          >
            Sign In
          </button>
          <div className="text-center">
            Don't have an account?{" "}
            <a href="#" className="text-blue-700 underline">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
