'use client'
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState({ username: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      router.push("/dashboard");
    } catch (error) {
      console.log("Login Error", error);
      alert("Error during login: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <Head>
        <title>Login</title>
      </Head>
      <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col w-2/3 max-w-4xl py-40 px-12">
        <div className="flex-1 flex flex-col items-center justify-center mb-auto">
          <h2 className="text-2xl font-bold mb-2">Log into your Account</h2>
          <p className="mb-10">Fill up your personal information and start your journey with us.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-5 bg-gray-200 w-60 p-4">
            <input
              type="text"
              name="username"
              placeholder="User Name"
              className="bg-gray-200 outline-none text-sm flex-1"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="mb-2 bg-gray-200 w-60 p-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-gray-200 outline-none text-sm flex-1"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        </div>
        <div className="mt-auto mb-5">
          <button
            onClick={onLogin}
            disabled={buttonDisabled || loading}
            className={`border-2 border-black rounded-full px-12 py-2 inline-block font-semibold ${
              buttonDisabled || loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:text-white'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        <div className="flex justify-between w-64">
          <label className="flex items-center text-xs">
            <input type="checkbox" name="remember" className="mr-1" />
            Remember me
          </label>
          <a href="#" className="text-xs">Forgot Password?</a>
        </div>
      </div>
    </main>
  );
}
