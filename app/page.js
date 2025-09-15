import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4 ">
        <div className="text-white font-bold text-5xl flex gap-2 justify-center items-center">
          <h1>Buy me a Chai</h1>
          <span>
            <img className="w-16 " src="/chai.gif" alt="" />
          </span>
        </div>
        <p> A crowdfunding platform for creators. Get funded  by your fans and followers. Start now!</p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto py-18 pb-35" >
        <h2 className="text-3xl font-bold text-center mb-25">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={90} src="/man.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-4 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={90} src="/coin.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-4 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={90} src="/group.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto py-18 pb-33" >
        <h2 className="text-3xl font-bold text-center mb-25">Learn more about Us</h2>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={90} src="/man.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={90} src="/coin.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={90} src="/group.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
    </>
  );
}
