import Head from "next/head";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col w-2/3 max-w-4xl py-40 px-12">
        <div className="flex-1 flex flex-col items-center justify-center mb-auto">
          <h2 className="text-2xl font-bold mb-2">Log into your Account</h2>
          <p className="mb-10">Fill up your personal information and start journey with us.</p>
        </div>
        <div className="flex flex-col items-center">

          <div className="mb-5 bg-gray-200 w-60 p-4">
            {/*<className="text-gray-500 mr-2"/>*/}
            <input type="username" name="username" placeholder=" User Name" className="bg-gray-200" outline-none text-sm flex-1/>
          </div>

          <div className="mb-2 bg-gray-200 w-60 p-4">
            {/*<className="text-gray-500 mr-2"/>*/}
            <input type="password" name="password" placeholder=" Password" className="bg-gray-200" outline-none text-sm flex-1/>
          </div>

        </div>
        <div className="mt-auto mb=5">
          <a href="#" className="border-2 border-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white">Login</a>
        </div>

        <div className="flex justify-between w-64">
          <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1"/>Remember me</label>
          <a href="#" className="text-xs">  Forgot Password?</a>
        </div>
      </div>
    </main>
  );
}

