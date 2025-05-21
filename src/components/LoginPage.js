import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="bg-[#0A2342] text-white w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="max-w-md">
          <img src="https://www.hootsuite.com/images/owly-symbol-saffron.svg" alt="Hootsuite Logo" className="h-10 mb-6" />
          <h1 className="text-2xl font-bold mb-2">Do more in less time with<br />OwlyWriter AI</h1>
          <p className="mb-6">
            Generate captions and posts in seconds! OwlyWriter AI makes content
            creation seriously easy for busy social pros like you.
          </p>
          <div className="bg-blue-100 text-black p-4 rounded mb-6">
            <strong>Our AI tool is so simple to use, anyone can do it.</strong> Click Inspiration to get started.
          </div>
          <a href="#" className="underline font-semibold">Try OwlyWriter AI now.</a>
        </div>
        <div className="mt-6">
          <img src="https://static.vecteezy.com/system/resources/previews/048/897/151/non_2x/vintage-red-robot-toy-free-png.png" alt="Robot" className="w-64" />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Sign in</h2>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none"
            placeholder="Enter your email"
          />
          <div className="flex justify-between items-center mb-2">
            <label className="block">Password</label>
            <a href="#" className="text-blue-600 text-sm font-semibold">Forgot password</a>
          </div>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none"
            placeholder="Enter your password"
          />
          <button className="w-full bg-gray-300 text-black py-3 rounded mb-2">Sign in</button>
          <button className="w-full bg-gray-200 text-blue-700 py-3 rounded font-bold">Single sign on</button>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-700 font-semibold">Sign up</a>
          </div>
          <p className="text-xs text-center text-gray-700 mt-4">
            By selecting Sign in, I agree to <span className="text-blue-700 font-semibold">Hootsuite's Terms</span>, including the payment terms, and <span className="text-blue-700 font-semibold">Privacy Policy</span>
          </p>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-700 font-semibold">Use Social Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
